import {
    ProductDataContext,
    ProductDataProviderProps,
} from '@/entities/product/types';
import { getCategoryService } from '@/features/category';
import { callToast } from '@/features/toast/services';
import { createContext, FC, useContext, useEffect } from 'react';
import { useProductStore } from '../store';

const ProductDataContext = createContext<ProductDataContext | undefined>(
    undefined,
);

export const useProductDataContext = (): ProductDataContext | undefined => {
    const context = useContext(ProductDataContext);
    if (!context) {
        callToast(
            true,
            'useProductDataContext must be used within a ProductDataProvider',
        );
    }
    return context;
};

const { getCategoryIdByUrl } = getCategoryService;

export const ProductDataProvider: FC<ProductDataProviderProps> = ({
    children,
    url,
}) => {
    const { get, getByCategory, products } = useProductStore();

    useEffect(() => {
        const fetchData = async () => {
            if (url !== undefined) {
                const categoryId = getCategoryIdByUrl(url);
                await getByCategory(categoryId);
            } else await get();
        };
        fetchData();
    }, [get, getByCategory, url]);

    return (
        <ProductDataContext.Provider value={{ products, get, getByCategory }}>
            {children}
        </ProductDataContext.Provider>
    );
};
