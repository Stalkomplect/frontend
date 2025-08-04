import { FC, useEffect } from 'react';
import { useProductStore } from '../../store';
import { ProductCard } from '@/entities/product';
import { getCategoryService } from '@/features/category/services';
import styles from './styles.module.scss';

type List = {
    url?: string | undefined;
};

const { getCategoryIdByUrl } = getCategoryService;

export const ProductList: FC<List> = ({ url }) => {
    const { get, getByCategory, products, error } = useProductStore();

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
        <ul className={styles.list}>
            {products?.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    );
};
