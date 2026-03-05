"use client";

import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
    const { items, clearCart } = useCartStore();

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax rate assumption
    const total = subtotal + tax;

    const handleCheckout = () => {
        alert("Thanks for your order! Checkout functionality would go here.");
        clearCart();
    };

    return (
        <main className="bg-coffee-950 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-5xl">

                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-2 text-coffee-100 hover:text-accent transition-colors text-sm font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Menu
                    </Link>
                </div>

                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-heading text-coffee-50 mb-3">Your Cart</h1>
                    <p className="text-coffee-100 text-lg">
                        {items.length === 0
                            ? "Your cart is currently empty."
                            : `You have ${items.reduce((acc, item) => acc + item.quantity, 0)} items in your cart.`}
                    </p>
                </div>

                {items.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            <AnimatePresence mode="popLayout">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-coffee-900 rounded-2xl p-6 border border-coffee-800 sticky top-24">
                                <h2 className="text-xl font-heading text-coffee-50 mb-6 border-b border-coffee-800 pb-4">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-coffee-100">
                                        <span>Subtotal</span>
                                        <span className="text-coffee-50 font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-coffee-100">
                                        <span>Estimated Tax (8%)</span>
                                        <span className="text-coffee-50 font-medium">${tax.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-xl font-semibold text-coffee-50 mb-8 pt-4 border-t border-coffee-800">
                                    <span>Total</span>
                                    <span className="text-accent">${total.toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-accent hover:bg-accent/90 text-coffee-950 font-bold rounded-full transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(79,156,143,0.2)] hover:shadow-[0_0_30px_rgba(79,156,143,0.4)]"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-coffee-900 rounded-3xl p-12 text-center max-w-2xl mx-auto border border-coffee-800"
                    >
                        <div className="w-24 h-24 bg-coffee-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-coffee-800">
                            <ShoppingBag className="w-10 h-10 text-coffee-500" />
                        </div>
                        <h2 className="text-2xl font-heading text-coffee-50 mb-4">Your cart is feeling a little light</h2>
                        <p className="text-coffee-100 mb-8 max-w-md mx-auto">
                            Browse our menu to discover our freshly roasted signature blends and handcrafted beverages.
                        </p>
                        <Link href="/menu">
                            <button className="px-8 py-3.5 bg-accent hover:bg-accent/90 text-coffee-950 font-semibold rounded-full transition-colors shadow-lg">
                                Explore Menu
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
