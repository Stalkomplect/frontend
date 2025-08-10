import { CategoryList } from '@/entities/category/config/_list';

const getCategoryIdByUrl = (url: string) => {
    const category = CategoryList.filter(
        (c) => c.link?.replace('catalog/', '') == url,
    );
    return category[0].id;
};

export const getCategoryService = {
    getCategoryIdByUrl,
};
