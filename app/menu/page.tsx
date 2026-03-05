import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MenuGrid from "@/components/MenuGrid";
import FloatingCartButton from "@/components/FloatingCartButton";

export default function MenuPage() {
    return (
        <main className="bg-coffee-950 min-h-screen pt-20">
            {/* Top Navigation Bar / Navbar is likely handling its own absolute/fixed positioning, but let's add a back to home link and floating cart button here */}

            <div className="fixed top-24 right-4 md:right-8 z-40">
                <FloatingCartButton />
            </div>

            <div className="container mx-auto px-4 max-w-7xl pt-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-coffee-100 hover:text-accent transition-colors text-sm font-medium mb-4 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
            </div>

            <MenuGrid />
        </main>
    );
}
