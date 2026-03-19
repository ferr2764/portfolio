"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/ThemeContext";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let destroyed = false;
    let animId: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let renderer: any = null;

    import("three").then((THREE) => {
      if (destroyed || !canvas) return;

      const scene = new THREE.Scene();
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;

      // 2D Orthographic view is best for crisp network networks
      const camera = new THREE.OrthographicCamera(w / -2, w / 2, h / 2, h / -2, 0.1, 1000);
      camera.position.z = 100;

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const PARTICLE_COUNT = Math.max(70, Math.floor((w * h) / 12000));
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const velocities: { x: number; y: number }[] = [];

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * w;
        positions[i * 3 + 1] = (Math.random() - 0.5) * h;
        positions[i * 3 + 2] = 0;
        velocities.push({
          x: (Math.random() - 0.5) * 0.4,
          y: (Math.random() - 0.5) * 0.4
        });
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const isDark = theme === "dark";
      const dotColor = isDark ? 0x8b5cf6 : 0x60a5fa; // violet-500 or blue-400
      const lineColor = isDark ? 0x8b5cf6 : 0x93c5fd; // violet-500 or blue-300

      const particleMat = new THREE.PointsMaterial({
        size: isDark ? 3 : 4,
        color: dotColor,
        transparent: true,
        opacity: isDark ? 0.7 : 0.6,
        sizeAttenuation: false,
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      const MAX_LINES = PARTICLE_COUNT * (PARTICLE_COUNT - 1);
      const linePositions = new Float32Array(MAX_LINES * 3);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

      const lineMat = new THREE.LineBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: isDark ? 0.2 : 0.35,
      });

      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);

      let mouseX = 9999;
      let mouseY = 9999;
      
      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX - window.innerWidth / 2;
        mouseY = -(e.clientY - window.innerHeight / 2);
      };
      
      const onMouseLeave = () => {
        mouseX = 9999;
        mouseY = 9999;
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);

      const onResize = () => {
        const nw = canvas.clientWidth;
        const nh = canvas.clientHeight;
        if (!nw || !nh) return;
        
        camera.left = nw / -2;
        camera.right = nw / 2;
        camera.top = nh / 2;
        camera.bottom = nh / -2;
        camera.updateProjectionMatrix();
        renderer?.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      const MAX_DIST = 130;
      const MOUSE_DIST = 160;

      const animate = () => {
        if (destroyed) return;
        animId = requestAnimationFrame(animate);

        const pos = particleGeo.attributes.position.array as Float32Array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;

          const hw = window.innerWidth / 2 + 50;
          const hh = window.innerHeight / 2 + 50;
          
          if (pos[i * 3] > hw) pos[i * 3] = -hw;
          else if (pos[i * 3] < -hw) pos[i * 3] = hw;
          
          if (pos[i * 3 + 1] > hh) pos[i * 3 + 1] = -hh;
          else if (pos[i * 3 + 1] < -hh) pos[i * 3 + 1] = hh;
        }
        particleGeo.attributes.position.needsUpdate = true;

        let lineIdx = 0;
        const lp = lineGeo.attributes.position.array as Float32Array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const px = pos[i * 3];
          const py = pos[i * 3 + 1];

          for (let j = i + 1; j < PARTICLE_COUNT; j++) {
            const dx = px - pos[j * 3];
            const dy = py - pos[j * 3 + 1];
            const distSq = dx * dx + dy * dy;

            if (distSq < MAX_DIST * MAX_DIST) {
              lp[lineIdx++] = px;
              lp[lineIdx++] = py;
              lp[lineIdx++] = 0;
              lp[lineIdx++] = pos[j * 3];
              lp[lineIdx++] = pos[j * 3 + 1];
              lp[lineIdx++] = 0;
            }
          }

          if (mouseX !== 9999) {
            const dxm = px - mouseX;
            const dym = py - mouseY;
            const distMouseSq = dxm * dxm + dym * dym;
            
            if (distMouseSq < MOUSE_DIST * MOUSE_DIST) {
              lp[lineIdx++] = px;
              lp[lineIdx++] = py;
              lp[lineIdx++] = 0;
              lp[lineIdx++] = mouseX;
              lp[lineIdx++] = mouseY;
              lp[lineIdx++] = 0;
              
              pos[i * 3] += (dxm / Math.sqrt(distMouseSq)) * 0.4;
              pos[i * 3 + 1] += (dym / Math.sqrt(distMouseSq)) * 0.4;
            }
          }
        }
        
        lineGeo.setDrawRange(0, lineIdx / 3);
        lineGeo.attributes.position.needsUpdate = true;

        renderer?.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseleave", onMouseLeave);
        window.removeEventListener("resize", onResize);
      };
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(animId);
      renderer?.dispose();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: "block", zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
