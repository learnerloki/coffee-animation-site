"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Settings2 } from "lucide-react";
import { type MenuItem } from "@/data/menu";
import { useCartStore } from "@/store/cartStore";
import CustomizeModal from "./CustomizeModal";
import { useRouter } from "next/navigation";

interface MenuItemCardProps {
    product: MenuItem;
}

export default function MenuItemCard({ product }: MenuItemCardProps) {
    const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
    const addItem = useCartStore((state) => state.addItem);
    const router = useRouter();

    const handleQuickAdd = () => {
        addItem({
            productId: product.id,
            name: product.title,
            price: product.price,
            quantity: 1,
            image: product.image,
            milk: "Whole",
            sugar: 1,
        });
        router.push("/cart");
    };

    return (
        <>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-coffee-900 rounded-2xl overflow-hidden border border-coffee-800 shadow-lg flex flex-col group h-full"
            >
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 right-4 bg-coffee-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-coffee-800/50">
                        <span className="text-accent font-semibold">${product.price.toFixed(2)}</span>
                    </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-heading text-coffee-50 mb-2 group-hover:text-accent transition-colors">{product.title}</h3>
                    <p className="text-sm text-coffee-100/70 mb-6 line-clamp-3 flex-1">{product.description}</p>

                    <div className="flex items-center gap-2 mt-auto">
                        <button
                            onClick={() => setIsCustomizeOpen(true)}
                            className="flex-1 flex justify-center items-center gap-2 bg-coffee-800 hover:bg-coffee-800/70 text-coffee-50 px-4 py-2.5 rounded-full text-sm font-medium transition-colors border border-coffee-500/30"
                        >
                            <Settings2 className="w-4 h-4" />
                            Customize
                        </button>
                        <button
                            onClick={handleQuickAdd}
                            className="w-12 h-12 flex justify-center items-center bg-accent hover:bg-accent/90 text-coffee-950 rounded-full transition-colors shrink-0 shadow-md hover:shadow-lg"
                        >
                            <ShoppingBag className="w-5 h-5 ml-[-2px]" />
                        </button>
                    </div>
                </div>
            </motion.div>

            <CustomizeModal
                isOpen={isCustomizeOpen}
                onClose={() => setIsCustomizeOpen(false)}
                product={product}
            />
        </>
    );
}
