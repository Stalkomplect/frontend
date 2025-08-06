import { Input } from '@/shared/ui/components/ui/input';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { ChangeEvent, FC, useState } from 'react';
import { useSearchStore } from '../../store';
import { callToast } from '@/features/toast/services';
import { SearchItem } from '../search-item';
import styles from './styles.module.scss';

import searchAction from '../../assets/search.svg';
import close from '../../assets/close.svg';

export const SearchPlace: FC = ({}) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const { search, products, clearData } = useSearchStore();

    const handleSubmit = async () => {
        if (searchValue.length >= 2) {
            clearData();
            await search(searchValue);
            console.log(products);
        } else callToast(true, 'Сформулируйте запрос подробнее!');
    };

    return (
        <div className={styles.search__content}>
            <header className={styles.search__content__place}>
                <Input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSearchValue(e.target.value)
                    }
                    placeholder='Найти шарнир...'
                />
                <button
                    onClick={handleSubmit}
                    className={`${styles.search__content__place__icon} ${styles.apply}`}
                >
                    <img src={searchAction} alt='search' />
                </button>
                <AlertDialogCancel>
                    <div
                        className={`${styles.search__content__place__icon} ${styles.close}`}
                    >
                        <img src={close} alt='close' />
                    </div>
                </AlertDialogCancel>
            </header>
            <section className={styles.search__content__body}>
                {products && products.length >= 1 ? (
                    products?.map((product) => (
                        <SearchItem key={product.id} item={product} />
                    ))
                ) : (
                    <h1
                        style={{
                            color: 'var(--foreground)',
                            fontSize: '20px',
                            fontWeight: '600',
                        }}
                        className='text-center font-light'
                    >
                        Пока ничего не нашли
                    </h1>
                )}
            </section>
        </div>
    );
};
