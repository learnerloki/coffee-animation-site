"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { MenuItem } from "@/data/menu";
import { X, Plus, Minus } from "lucide-react";

interface CustomizeModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: MenuItem;
}

const MILK_OPTIONS = ["Whole", "Almond", "Oat"];
const SUGAR_OPTIONS = [0, 1, 2, 3];
const EXTRA_OPTIONS = ["Caramel", "Vanilla", "Chocolate"];

export default function CustomizeModal({ isOpen, onClose, product }: CustomizeModalProps) {
    const addItem = useCartStore((state) => state.addItem);

    const [milk, setMilk] = useState<string>("Whole");
    const [sugar, setSugar] = useState<number>(1);
    const [extras, setExtras] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<number>(1);

    const toggleExtra = (extra: string) => {
        setExtras((prev) =>
            prev.includes(extra)
                ? prev.filter((e) => e !== extra)
                : [...prev, extra]
        );
    };

    const handleAddToCart = () => {
        addItem({
            productId: product.id,
            name: product.title,
            price: product.price,
            quantity,
            image: product.image,
            milk,
            sugar,
            extras: extras.length > 0 ? extras : undefined,
        });
        onClose();
        // Reset state after add
        setMilk("Whole");
        setSugar(1);
        setExtras([]);
        setQuantity(1);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
                <div
                    className="absolute inset-0"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-lg bg-coffee-900 rounded-2xl overflow-hidden border border-coffee-800 shadow-2xl flex flex-col max-h-[90vh]"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-coffee-950/50 rounded-full hover:bg-coffee-950 transition-colors text-coffee-50"
                    >
                        <X size={20} />
                    </button>

                    <div className="relative h-48 w-full shrink-0">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                            <h2 className="text-2xl font-heading text-coffee-50">{product.title}</h2>
                            <p className="text-accent font-semibold">${product.price.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
                        {/* Milk Options */}
                        <div>
                            <h3 className="text-lg font-medium text-coffee-50 mb-3">Milk Type</h3>
                            <div className="flex flex-wrap gap-2">
                                {MILK_OPTIONS.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setMilk(option)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${milk === option
                                                ? "bg-accent border-accent text-coffee-950"
                                                : "bg-coffee-950 border-coffee-800 text-coffee-100 hover:border-coffee-500"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sugar Level */}
                        <div>
                            <h3 className="text-lg font-medium text-coffee-50 mb-3">Sugar Level</h3>
                            <div className="flex gap-2">
                                {SUGAR_OPTIONS.map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSugar(level)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors border ${sugar === level
                                                ? "bg-accent border-accent text-coffee-950"
                                                : "bg-coffee-950 border-coffee-800 text-coffee-100 hover:border-coffee-500"
                                            }`}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Extras */}
                        <div>
                            <h3 className="text-lg font-medium text-coffee-50 mb-3">Extras</h3>
                            <div className="flex flex-wrap gap-2">
                                {EXTRA_OPTIONS.map((extra) => (
                                    <button
                                        key={extra}
                                        onClick={() => toggleExtra(extra)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${extras.includes(extra)
                                                ? "bg-accent border-accent text-coffee-950"
                                                : "bg-coffee-950 border-coffee-800 text-coffee-100 hover:border-coffee-500"
                                            }`}
                                    >
                                        {extra}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center justify-between pt-4 border-t border-coffee-800">
                            <span className="text-coffee-50 font-medium">Quantity</span>
                            <div className="flex items-center gap-4 bg-coffee-950 rounded-full p-1 border border-coffee-800">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-1.5 rounded-full hover:bg-coffee-800 text-coffee-100 transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="text-coffee-50 w-4 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-1.5 rounded-full hover:bg-coffee-800 text-coffee-100 transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-coffee-950 border-t border-coffee-800 shrink-0">
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-3.5 bg-accent hover:bg-accent/90 text-coffee-950 font-semibold rounded-full transition-colors flex justify-center items-center"
                        >
                            Add Customized Item to Cart
                            <span className="ml-2 px-2 py-0.5 bg-coffee-950/20 rounded-full text-sm">
                                ${(product.price * quantity).toFixed(2)}
                            </span>
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
