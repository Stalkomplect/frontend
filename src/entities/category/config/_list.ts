import { CategoryCardContent } from '@/entities/category/types';

import parts from '../assets/parts.jpg';
import construction from '../assets/construction.jpg';
import drawings from '../assets/drawings.jpg';

export const CategoryList: CategoryCardContent[] = [
    {
        id: '6f10ea01-ccc6-4b9a-8221-5f74d33ec363',
        image: parts,
        name: 'Ж/Д Запчасти',
        link: 'catalog/train-parts',
    },
    {
        id: 'a9aeb201-2323-4241-9049-f45ff19865b8',
        image: construction,
        name: 'Строительные материалы',
        link: 'catalog/constructions',
    },
    {
        id: '689514fa-8559-4ea6-9fe2-da3509e80d0e',
        image: drawings,
        name: 'Индивидуальные заказы',
        link: 'catalog/individual-orders',
    },
];
