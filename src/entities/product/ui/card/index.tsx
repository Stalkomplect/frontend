import { FC } from 'react';
import { ProductCardComponent } from '../../types';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const noPhoto =
    'https://static.vecteezy.com/system/resources/previews/019/787/070/non_2x/no-photos-and-no-phones-forbidden-sign-on-transparent-background-free-png.png';

export const ProductCard: FC<ProductCardComponent> = ({ product }) => (
    <Link to={`/catalog/product/${product.id}`} className={styles.card}>
        <section className={styles.card__header}>
            <img
                className={styles.card__header__img}
                src={
                    product.productMedias[0]
                        ? product.productMedias[0].link
                        : noPhoto
                }
            />
        </section>
        <section className={styles.card__info}>
            <h2>{product.name}</h2>
            <div className={styles.card__info__additional}>
                <h3>{product.number}</h3>
            </div>
        </section>
    </Link>
);
