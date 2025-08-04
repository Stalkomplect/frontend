import { Product } from '@/entities/product/types';
import { getCategoryService } from '@/features/category/services';
import { apiInstance } from '@/shared/api/_base';

const BASE_URL = 'products/';

const { getCategoryIdByUrl } = getCategoryService;

const getAll = async (): Promise<Product[] | []> => {
    return await apiInstance.get(BASE_URL + 'get-all');
};

const getRandom = async (): Promise<Product[]> => {
    return await apiInstance.get(BASE_URL + 'get-random');
};

const getByNameOrNumber = async (value: string): Promise<Product[] | []> => {
    return await apiInstance.get(
        BASE_URL + `get-by-name-or-number?value=${value}`,
    );
};

const getById = async (id: string): Promise<Product> => {
    return await apiInstance.get(BASE_URL + `get-by-id?Id=${id}`);
};

const getByCategoryId = async (categoryId: string): Promise<Product[] | []> => {
    return await apiInstance.get(
        BASE_URL + `get-by-category-id?categoryId=${categoryId}`,
    );
};

export const productApiGet = {
    getAll,
    getRandom,
    getByNameOrNumber,
    getById,
    getByCategoryId,
};
