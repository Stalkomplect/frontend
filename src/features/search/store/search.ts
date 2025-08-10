import { Product } from '@/entities/product/types';
import { productApiGet } from '@/features/product';
import { create } from 'zustand';

const { getByNameOrNumber } = productApiGet;

interface SearchStore {
    products: Product[] | null;
    error: string | null;
    search: (searchValue: string) => Promise<void>;
    clearData: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    products: null,
    error: null,
    search: async (searchValue: string) => {
        set({ error: null });
        try {
            const data = await getByNameOrNumber(searchValue);
            set({ products: data });
        } catch (error) {
            set({ error: 'Ошибка при поиске!' });
        }
    },
    clearData: () => {
        set({ products: null });
    },
}));
