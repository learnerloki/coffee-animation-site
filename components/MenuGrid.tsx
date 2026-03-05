"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";

const CATEGORIES = [
    { id: 'all', label: 'All Beverages' },
    { id: 'hot', label: 'Hot Coffees' },
    { id: 'cold', label: 'Cold Coffees' },
    { id: 'frappe', label: 'Frappuccino' },
];

export default function MenuGrid() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-24 bg-coffee-950 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header & Filters */}
                <div className="mb-12 text-center md:text-left md:flex md:items-end md:justify-between gap-8">
                    <div className="mb-8 md:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-heading text-coffee-50 mb-4"
                        >
                            Our Menu
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-coffee-100 text-lg max-w-2xl"
                        >
                            Handcrafted beverages tailored to your taste.
                            Customize your perfect cup of coffee.
                        </motion.p>
                    </div>

                    {/* Category Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 justify-center md:justify-end"
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                                        ? "bg-accent text-coffee-950 shadow-[0_0_20px_rgba(79,156,143,0.3)]"
                                        : "bg-coffee-900 text-coffee-100 border border-coffee-800 hover:border-coffee-500 hover:text-coffee-50"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            layout
                        >
                            <MenuItemCard product={item} />
                        </motion.div>
                    ))}
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-coffee-100">
                        No items found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}
