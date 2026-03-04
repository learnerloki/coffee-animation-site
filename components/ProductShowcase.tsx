"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductShowcase() {
    return (
        <section className="py-24 px-4 md:px-8 bg-coffee-950 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent tracking-widest uppercase text-sm font-semibold mb-4 block">Our Collection</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-coffee-50 mb-6">
                        Signature Roasts
                    </h2>
                    <p className="text-coffee-100 max-w-2xl mx-auto md:text-lg">
                        Sourced from the finest high-altitude farms globally. Hand-roasted in small batches to preserve every nuanced note.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
