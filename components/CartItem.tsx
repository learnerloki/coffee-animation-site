"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCartStore, type CartItem as ICartItem } from "@/store/cartStore";

interface CartItemProps {
    item: ICartItem;
}

export default function CartItem({ item }: CartItemProps) {
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-coffee-900 p-4 rounded-2xl border border-coffee-800"
        >
            <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-coffee-800">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col min-w-0 w-full">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-heading text-coffee-50 truncate pr-4">{item.name}</h3>
                    <p className="text-accent font-semibold whitespace-nowrap">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>

                <div className="text-sm text-coffee-100/70 mb-4 flex-1">
                    {/* Display customizations if they exist */}
                    {item.milk && <span className="block">• {item.milk} Milk</span>}
                    {item.sugar !== undefined && <span className="block">• Sugar Level: {item.sugar}</span>}
                    {item.extras && item.extras.length > 0 && (
                        <span className="block">• Extras: {item.extras.join(", ")}</span>
                    )}
                    {!item.milk && item.sugar === undefined && (!item.extras || item.extras.length === 0) && (
                        <span className="block italic text-coffee-500">Standard</span>
                    )}
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 bg-coffee-950 rounded-full p-1 border border-coffee-800">
                        <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 rounded-full hover:bg-coffee-800 text-coffee-100 transition-colors"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="text-coffee-50 w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-coffee-800 text-coffee-100 transition-colors"
                        >
                            <Plus size={14} />
                        </button>
                    </div>

                    <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full transition-colors"
                        aria-label="Remove item"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
