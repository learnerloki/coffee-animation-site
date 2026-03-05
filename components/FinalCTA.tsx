"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="relative py-32 bg-coffee-950 overflow-hidden flex items-center justify-center">

            {/* Soft glowing background animations */}
            <motion.div
                className="absolute w-[800px] h-[800px] bg-coffee-800/30 rounded-full blur-[100px] mix-blend-screen"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-[80px] mix-blend-screen"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-heading text-coffee-50 mb-6 drop-shadow-md">
                        Find the Perfect Coffee for You
                    </h2>
                    <p className="text-xl md:text-2xl text-coffee-100 mb-12 font-light">
                        Experience the art of coffee craftsmanship.
                    </p>

                    <Link href="/menu">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-coffee-950 text-lg font-semibold px-8 py-4 rounded-full shadow-[0_0_40px_rgba(79,156,143,0.3)] hover:shadow-[0_0_60px_rgba(79,156,143,0.5)] transition-shadow duration-300"
                        >
                            Explore Full Menu
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle bottom border highlight */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-800 to-transparent" />
        </section>
    );
}
