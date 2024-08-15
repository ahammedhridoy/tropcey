// @ts-nocheck
import React, { useRef, useEffect, useState } from 'react';

export default function CanvasComponent() {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 300, height: 300 });
    let cameraZoom = 1; // Only affects the zoomed images
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.1;
    const SCROLL_SENSITIVITY = 0.001;

    // Images array: the first image is the base image, not zoomable
    const images = [
      { src: '/images/land/L 1-02.png', x: 0, y: 0, width: 400, height: 200, zoomable: false },
      { src: '/images/land/About us Pages-03.png', x: 150, y: 50, width: 150, height: 150, url: '/vinegar', zoomable: true },
      { src: '/images/land/About us Pages-04.png', x: 320, y: 50, width: 150, height: 150, url: '/treacle', zoomable: true },
      { src: '/images/land/About us Pages-05.png', x: 10, y: 250, width: 150, height: 150, url: '/chips', zoomable: true },
      { src: '/images/land/About us Pages-09.png', x: 180, y: 250, width: 150, height: 150, url: '/spread', zoomable: true },
      { src: '/images/land/About us Pages-11.png', x: 340, y: 250, width: 150, height: 150, url: '/flour', zoomable: true },
      { src: '/images/land/About us Pages-06.png', x: 50, y: 450, width: 150, height: 150, url: '/sugar', zoomable: true },
      { src: '/images/land/About us Pages-08.png', x: 220, y: 450, width: 150, height: 150, url: '/dessicated', zoomable: true },
      { src: '/images/land/About us Pages-10.png', x: 400, y: 450, width: 150, height: 150, url: '/milk', zoomable: true },
      { src: '/images/land/About us Pages-07.png', x: 570, y: 450, width: 150, height: 150, url: '/oil', zoomable: true },
      { src: '/images/land/About us Pages-13.png', x: 680, y: 500, width: 250, height: 150, zoomable: true },
  ];

    useEffect(() => {
        function handleResize() {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        // Preloading images and setting onload handler
        images.forEach(img => {
            img.image = new Image();
            img.image.src = img.src;
            img.image.onload = draw;
        });

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            images.forEach(img => {
                ctx.save(); // Save current context state
                if (img.zoomable) {
                    // Apply zoom transformations only to zoomable images
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.scale(cameraZoom, cameraZoom);
                    ctx.translate(-canvas.width / 2, -canvas.height / 2);
                }

                // Draw image
                ctx.drawImage(img.image, img.x, img.y, img.width, img.height);
                ctx.restore(); // Restore context state to avoid affecting other images
            });
        }

        function handleWheel(e) {
            if (images.some(img => img.zoomable)) { // Check if there are any zoomable images
                const zoom = Math.exp(e.deltaY * SCROLL_SENSITIVITY);
                cameraZoom *= zoom;
                cameraZoom = Math.max(MIN_ZOOM, Math.min(cameraZoom, MAX_ZOOM));
                e.preventDefault();
                draw();
            }
        }

        canvas.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            canvas.removeEventListener('wheel', handleWheel);
        };
    }, [dimensions]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>;
}
