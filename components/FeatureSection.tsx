"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Droplets, ThermometerSun, Award } from "lucide-react";

const featuresLeft = [
    {
        icon: <Leaf className="w-6 h-6 text-accent" />,
        title: "Ethically Sourced",
        description: "Direct trade relationships with farmers ensuring fair compensation and sustainable practices."
    },
    {
        icon: <ThermometerSun className="w-6 h-6 text-accent" />,
        title: "Precision Roasted",
        description: "Small batch roasting tailored to each bean's unique origin and flavor profile."
    }
];

const featuresRight = [
    {
        icon: <Droplets className="w-6 h-6 text-accent" />,
        title: "Washed & Natural",
        description: "Expertly processed beans to highlight absolute clarity or rich fruit-forward notes."
    },
    {
        icon: <Award className="w-6 h-6 text-accent" />,
        title: "Specialty Grade",
        description: "Only the top 1% of coffee beans worldwide make it into our exclusive signature blends."
    }
];

function FeatureCard({ feature, align = "left" }: { feature: { icon: React.ReactNode; title: string; description: string; }, align?: "left" | "right" }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${align === "right" ? "md:items-end md:text-right" : ""} mb-12`}
        >
            <div className="bg-coffee-900 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg border border-coffee-800">
                {feature.icon}
            </div>
            <h3 className="text-xl font-heading text-coffee-50 mb-2">{feature.title}</h3>
            <p className="text-coffee-100 text-sm leading-relaxed max-w-sm">{feature.description}</p>
        </motion.div>
    );
}

export default function FeatureSection() {
    return (
        <section className="py-24 bg-coffee-950/80 relative overflow-hidden">
            {/* Decorative background blurs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coffee-800/20 blur-3xl rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-3xl rounded-full mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading text-coffee-50 mb-6">The Anatomy of Perfection</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                    <div className="order-2 md:order-1 flex flex-col justify-center">
                        {featuresLeft.map((feat, idx) => (
                            <FeatureCard key={idx} feature={feat} align="left" />
                        ))}
                    </div>

                    <motion.div
                        className="order-1 md:order-2 relative h-[500px] w-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative w-full h-full max-w-sm max-h-sm drop-shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop"
                                alt="Floating coffee cup"
                                fill
                                className="object-cover rounded-t-full rounded-b-3xl shadow-2xl border-4 border-coffee-800"
                            />
                            <div className="absolute -inset-4 rounded-t-full rounded-b-3xl border border-accent/20 motion-safe:animate-pulse" />
                        </motion.div>
                    </motion.div>

                    <div className="order-3 flex flex-col justify-center">
                        {featuresRight.map((feat, idx) => (
                            <FeatureCard key={idx} feature={feat} align="right" />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
