import { Product } from '@/entities/product/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem extends Product {
    quantity: number;
}

interface ShoppingCartStore {
    items: CartItem[] | [];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    clearShoppingCart: () => void;
    getAllItem: () => CartItem[];
}

export const useShoppingCartStore = create<ShoppingCartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.id === product.id,
                    );
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item,
                            ),
                        };
                    }
                    return {
                        items: [...state.items, { ...product, quantity: 1 }],
                    };
                }),
            removeItem: (productId: string) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId),
                }));
            },
            clearShoppingCart: () => set({ items: [] }),
            getAllItem: () => get().items,
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ items: state.items }),
        },
    ),
);
