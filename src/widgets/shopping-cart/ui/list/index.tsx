import { ProductCard } from '@/entities/product';
import { ProductDataProvider } from '@/features/product';
import { ProductListProvider } from '@/features/product/context';
import { useShoppingCartStore } from '@/features/shopping-cart';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const ShoppingCartList: FC = () => {
    const items = useShoppingCartStore();

    return (
        <section className={styles.list}>
            {items.items.length >= 1 ? (
                <ProductDataProvider>
                    <ProductListProvider>
                        {items.items.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </ProductListProvider>
                </ProductDataProvider>
            ) : (
                <section className={styles.empty}>
                    <h1>Ваша корзина пуста!</h1>
                    <Link to={'/catalog'}>За покупками!</Link>
                </section>
            )}
        </section>
    );
};
