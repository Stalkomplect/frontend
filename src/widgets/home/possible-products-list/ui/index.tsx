import { FC, useEffect } from 'react';
import { usePossibleProductsListStore } from '@/features/product/store';
import { ProductCard } from '@/entities/product';
import { Link } from 'react-router-dom';
import { ProductDataProvider } from '@/features/product';
import { ProductListProvider } from '@/features/product/context';
import styles from './styles.module.scss';

export const PossibleProductsList: FC = ({}) => {
    const { products, get } = usePossibleProductsListStore();

    useEffect(() => {
        const fetchProducts = async () => {
            await get();
        };
        fetchProducts();
    }, [get]);

    return (
        <ProductDataProvider>
            <ProductListProvider>
                <section className={styles.place}>
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    <Link className={styles.place__link} to={'/catalog'}>
                        Посмотреть всю продукцию
                    </Link>
                </section>
            </ProductListProvider>
        </ProductDataProvider>
    );
};
