"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 192;
const FRAME_PREFIX = "/frames/frame_";
const FRAME_SUFFIX = ".png";

export default function HeroCanvasAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = `${FRAME_PREFIX}${i}${FRAME_SUFFIX}`;
            img.onload = () => {
                loadedCount++;
                setLoaded(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
                if (loadedCount === TOTAL_FRAMES) {
                    // ensure they are sorted correctly in the array if they loaded out of order
                    loadedImages.length = TOTAL_FRAMES;
                    for (let j = 1; j <= TOTAL_FRAMES; j++) {
                        const finalImg = new Image();
                        finalImg.src = `${FRAME_PREFIX}${j}${FRAME_SUFFIX}`;
                        loadedImages[j - 1] = finalImg;
                    }
                    setImages(loadedImages);
                }
            };
            // In case of error, just increment loadedCount so we don't block forever
            img.onerror = () => {
                loadedCount++;
                setLoaded(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
            };
        }
    }, []);

    // Main rendering loop
    const requestRef = useRef<number>(null);
    const currentFrameRef = useRef(1);

    const renderFrame = useCallback((index: number) => {
        if (images.length === 0 || !images[0]) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // ensure index is within bounds
        const safeIndex = Math.min(Math.max(1, index), TOTAL_FRAMES);
        const img = images[safeIndex - 1];

        if (!img) return;

        // Object-fit: cover logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }, [images]);

    // Responsive canvas setup
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(Math.floor(frameIndex.get()));
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [images, frameIndex, renderFrame]);

    useEffect(() => {
        const animate = () => {
            const targetFrame = Math.round(frameIndex.get());
            if (targetFrame !== currentFrameRef.current) {
                renderFrame(targetFrame);
                currentFrameRef.current = targetFrame;
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        if (images.length === TOTAL_FRAMES) {
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [images, frameIndex, renderFrame]);

    // Text overlays fades
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.50, 0.60, 0.70], [0, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="relative w-full hero-vh bg-coffee-950">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {loaded < 100 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-coffee-950 text-coffee-50 z-50">
                        <h2 className="text-2xl font-heading mb-4">Brewing Excellence...</h2>
                        <div className="w-64 h-1 border border-coffee-800 rounded overflow-hidden">
                            <div
                                className="h-full bg-accent transition-all duration-300"
                                style={{ width: `${loaded}%` }}
                            />
                        </div>
                        <p className="mt-2 text-sm text-coffee-100">{loaded}%</p>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />

                {/* Text Overlays */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-4">
                    <motion.div style={{ opacity: opacity1 }} className="absolute">
                        <h1 className="text-5xl md:text-7xl font-heading text-coffee-50 drop-shadow-lg mb-4">
                            Experience Coffee
                        </h1>
                    </motion.div>

                    <motion.div style={{ opacity: opacity2 }} className="absolute">
                        <h2 className="text-4xl md:text-6xl font-heading text-coffee-50 drop-shadow-lg mb-4">
                            Crafted to Perfection
                        </h2>
                    </motion.div>

                    <motion.div style={{ opacity: opacity3 }} className="absolute">
                        <h2 className="text-4xl md:text-6xl font-heading text-coffee-50 drop-shadow-lg mb-4">
                            Anti-Gravity Flavor
                        </h2>
                    </motion.div>

                    <motion.div style={{ opacity: opacity4 }} className="absolute">
                        <h2 className="text-4xl md:text-6xl font-heading text-coffee-50 drop-shadow-lg mb-4">
                            Discover Your Blend
                        </h2>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <span className="text-sm tracking-widest uppercase mb-2 text-coffee-100">Scroll to explore</span>
                    <div className="w-px h-16 bg-gradient-to-b from-coffee-100 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
