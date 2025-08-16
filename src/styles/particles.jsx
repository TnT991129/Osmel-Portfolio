import React, { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 18;

function randomParticle(width, height) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = 0.3 + Math.random() * 0.7;
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: 18 + Math.random() * 22,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        alpha: 0.25 + Math.random() * 0.25,
    };
}

export default function ParticlesBg({ show }) {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        let animationId;
        const canvas = canvasRef.current;
        if (!canvas || !show) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Inicializa partículas solo si no existen
        if (particlesRef.current.length === 0) {
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particlesRef.current.push(randomParticle(width, height));
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            for (let p of particlesRef.current) {
                // Movimiento
                p.x += p.dx;
                p.y += p.dy;

                // Rebote en los bordes
                if (p.x < 0 || p.x > width) p.dx *= -1;
                if (p.y < 0 || p.y > height) p.dy *= -1;

                // Gradiente difuminado rojo
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
                gradient.addColorStop(0, `rgba(239,68,68,${p.alpha})`);
                gradient.addColorStop(1, 'rgba(239,68,68,0)');
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        function animate() {
            draw();
            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            // Limpia partículas al ocultar
            if (!show) particlesRef.current = [];
        };
    }, [show]);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={120}
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        />
    );
}