import { CreateOrder } from '@/entities/order';
import { apiInstance } from '@/shared/api/_base';

const BASE_URL = 'orders/';

const create = async (model: CreateOrder) => {
    await apiInstance.post(BASE_URL + 'create', model);
};

export const postOrderApi = {
    create,
};
