"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function FloatingCartButton() {
    const items = useCartStore((state) => state.items);

    // Calculate total count (sum of quantities)
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link href="/cart">
            <div className="relative bg-accent text-coffee-950 p-4 rounded-full shadow-[0_4px_30px_rgba(79,156,143,0.4)] hover:shadow-[0_4px_40px_rgba(79,156,143,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
                {itemCount > 0 && (
                    <div className="absolute -top-2 -right-2 bg-coffee-500 text-coffee-50 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-coffee-950">
                        {itemCount}
                    </div>
                )}
            </div>
        </Link>
    );
}
