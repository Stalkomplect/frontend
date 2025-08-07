import {
    Product,
    ProductListContextType,
    ProductListProviderProps,
} from '@/entities/product';
import { useShoppingCartStore } from '@/features/shopping-cart';
import { callToast } from '@/features/toast/services';
import { createContext, FC, useContext } from 'react';

const ProductListContext = createContext<ProductListContextType | undefined>(
    undefined,
);

export const useProductListContext = () => {
    const context = useContext(ProductListContext);
    if (!context) {
        callToast(
            true,
            'useProductListContext must be used within a ProductListProvider',
        );
        throw Error(
            'useProductListContext must be used within a ProductListProvider',
        );
    }
    return context;
};

export const ProductListProvider: FC<ProductListProviderProps> = ({
    children,
}) => {
    const addItem = useShoppingCartStore((state) => state.addItem);
    const removeItem = useShoppingCartStore((state) => state.removeItem);
    const items = useShoppingCartStore((state) => state.items);

    const isInCart = (productId: string) => {
        return items.some((item) => item.id === productId);
    };

    const changeItemState = (product: Product) => {
        if (items.some((item) => item.id === product.id)) {
            removeItem(product.id);
        } else {
            addItem(product);
        }
    };

    return (
        <ProductListContext.Provider value={{ isInCart, changeItemState }}>
            {children}
        </ProductListContext.Provider>
    );
};
