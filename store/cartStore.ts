import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string;
    productId: string; // The original product ID
    name: string;
    price: number;
    quantity: number;
    image: string;
    milk?: string;
    sugar?: number;
    extras?: string[];
}

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'id'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item) => set((state) => {
                // If the item doesn't have customizations, we can group it by productId
                // If it has customizations, it should probably be a separate entry or grouped by exact customizations
                // To keep it simple, we generate a unique ID based on selections if not provided, or just generate a random one

                // Let's check if an identical item exists in the cart to increment quantity
                const existingItemIndex = state.items.findIndex(
                    (i) => i.productId === item.productId &&
                        i.milk === item.milk &&
                        i.sugar === item.sugar &&
                        JSON.stringify(i.extras || []) === JSON.stringify(item.extras || [])
                );

                if (existingItemIndex > -1) {
                    const newItems = [...state.items];
                    newItems[existingItemIndex].quantity += item.quantity;
                    return { items: newItems };
                }

                // If no identical item, add new
                const newItem = {
                    ...item,
                    id: crypto.randomUUID()
                };

                return { items: [...state.items, newItem] };
            }),
            removeItem: (id) => set((state) => ({
                items: state.items.filter((item) => item.id !== id)
            })),
            updateQuantity: (id, quantity) => set((state) => ({
                items: state.items.map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
                )
            })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'coffee-cart-storage',
        }
    )
);
