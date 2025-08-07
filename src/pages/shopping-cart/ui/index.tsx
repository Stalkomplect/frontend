import { ShoppingCartForm, ShoppingCartList } from '@/widgets/shopping-cart';
import styles from './styles.module.scss';

export const ShoppingCartPage = () => {
    return (
        <section className={`container-xl ${styles.place}`}>
            <ShoppingCartList />
            <ShoppingCartForm productsId={[]} />
        </section>
    );
};
