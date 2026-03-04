"use client";

import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";
import { type Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-coffee-900 rounded-2xl overflow-hidden border border-coffee-800 shadow-xl transition-all hover:shadow-2xl hover:border-coffee-500/50 group"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6 relative">
                <div className="absolute -top-6 right-6 bg-coffee-800 rounded-full px-4 py-1 flex items-center gap-1 border border-coffee-500/30">
                    <Star className="w-4 h-4 fill-star text-star" />
                    <span className="text-coffee-50 font-semibold">{product.rating}</span>
                </div>

                <h3 className="text-2xl font-heading mb-2 text-coffee-50">{product.title}</h3>
                <p className="text-sm text-coffee-100/80 mb-6 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-semibold text-coffee-50">${product.price.toFixed(2)}</span>
                    <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-coffee-950 px-5 py-2.5 rounded-full font-medium transition-colors">
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
