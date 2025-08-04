import { Product } from '@/entities/product/types';
import { create } from 'zustand';
import { productApiGet } from '../api';

const { getRandom } = productApiGet;

interface PossibleStore {
    products: Product[] | null;
    error: string | null;
    get: () => Promise<void>;
}

export const usePossibleProductsListStore = create<PossibleStore>((set) => ({
    products: null,
    error: null,
    get: async () => {
        set({ error: null });
        try {
            const data = await getRandom();
            set({ products: data });
        } catch (error) {
            set({ error: 'Ошибка получения продуктов!' });
        }
    },
}));
