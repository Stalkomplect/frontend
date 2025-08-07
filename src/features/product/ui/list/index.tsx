import { FC } from 'react';
import { ProductCard } from '@/entities/product';
import { ProductDataProvider, ProductListProvider } from '../../context';
import { useProductDataContext } from '../../context/product-context';
import styles from './styles.module.scss';

type List = {
    url?: string | undefined;
};

export const ProductList: FC<List> = ({ url }) => {
    return (
        <ProductDataProvider url={url}>
            <ProductListProvider>
                <ProductListContext />
            </ProductListProvider>
        </ProductDataProvider>
    );
};

const ProductListContext: FC = () => {
    const products = useProductDataContext();

    return (
        <ul className={styles.list}>
            {products?.products?.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    );
};
