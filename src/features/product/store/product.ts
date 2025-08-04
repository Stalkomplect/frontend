import { Product } from '@/entities/product/types';
import { productApiGet } from '../api';
import { create } from 'zustand';
import { getCategoryService } from '@/features/category/services';

const { getAll, getByCategoryId } = productApiGet;

const { getCategoryIdByUrl } = getCategoryService;

interface ProductStore {
    products: Product[] | null;
    error: string | null;
    get: () => Promise<void>;
    getByCategory: (categoryId: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: null,
    error: null,
    get: async () => {
        set({ error: null });
        try {
            const data = await getAll();
            set({ products: data });
        } catch (error) {
            set({ error: 'Ошибка получения продуктов!' });
        }
    },
    getByCategory: async (categoryId: string) => {
        set({ error: null });
        try {
            const data = await getByCategoryId(categoryId);
            set({ products: data });
        } catch (error) {
            set({ error: 'Ошибка при получении продуктов!' });
        }
    },
}));
