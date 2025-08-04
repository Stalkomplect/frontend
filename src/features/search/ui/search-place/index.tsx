import { Input } from '@/shared/ui/components/ui/input';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { FC } from 'react';
import styles from './styles.module.scss';

import search from '../../assets/search.svg';
import close from '../../assets/close.svg';

export const SearchPlace: FC = ({}) => {
    return (
        <div className={styles.search__content}>
            <div className={styles.search__content__place}>
                <Input placeholder='Найти шарнир...' />
                <div
                    className={`${styles.search__content__place__icon} ${styles.apply}`}
                >
                    <img src={search} alt='search' />
                </div>
                <AlertDialogCancel>
                    <div
                        className={`${styles.search__content__place__icon} ${styles.close}`}
                    >
                        <img src={close} alt='close' />
                    </div>
                </AlertDialogCancel>
            </div>
        </div>
    );
};
