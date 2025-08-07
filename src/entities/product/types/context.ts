import { ReactNode } from 'react';
import { Product } from './_base';

export interface ProductDataContext {
    products: Product[] | null;
    get: () => Promise<void>;
    getByCategory: (categoryId: string) => Promise<void>;
}

export interface ProductDataProviderProps {
    children: ReactNode;
    url?: string;
}

export interface ProductListContextType {
    isInCart: (productId: string) => boolean;
    changeItemState: (product: Product) => void;
}

export interface ProductListProviderProps {
    children: ReactNode;
}
