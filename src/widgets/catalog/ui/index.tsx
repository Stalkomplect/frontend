import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ProductList } from '@/features/product';
import { CategoryPlace } from '@/widgets/category';
import styles from './styles.module.scss';

export const Catalog: FC = ({}) => {
    const params = useParams();
    const url = params.url;

    return (
        <section className={`container-xl ${styles.place}`}>
            <h1 className={styles.place__header}>Каталог</h1>
            <CategoryPlace type={'catalog'} />
            <section className={styles.place__catalog}>
                <ProductList url={url ? url : undefined} />
            </section>
        </section>
    );
};
