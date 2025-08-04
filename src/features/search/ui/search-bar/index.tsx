import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
} from '@/shared/ui/components/ui/alert-dialog';
import { FC } from 'react';
import { SearchPlace } from '../search-place';
import styles from './styles.module.scss';

import search from '../../assets/search.svg';

export const SearchBar: FC = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className={styles.search}>
                <img src={search} alt='search' />
                <p>Поиск по названию</p>
            </AlertDialogTrigger>
            <AlertDialogContent className={styles.search__content}>
                <SearchPlace />
            </AlertDialogContent>
        </AlertDialog>
    );
};
