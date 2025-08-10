import { Product } from '@/entities/product/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type Props = {
    item: Product;
};

const noPhoto =
    'https://static.vecteezy.com/system/resources/previews/019/787/070/non_2x/no-photos-and-no-phones-forbidden-sign-on-transparent-background-free-png.png';

export const SearchItem: FC<Props> = ({ item }) => (
    <Link to={`/catalog/product/${item.id}`} className={styles.item}>
        <div className={styles.item__inner}>
            <img
                className={styles.item__inner__img}
                src={
                    item.productMedias[0] ? item.productMedias[0].link : noPhoto
                }
            />
            <h3>{item.name}</h3>
        </div>
        <h3>{item.number}</h3>
    </Link>
);
