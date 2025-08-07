import { CallBackModel } from '@/entities/callback';
import { apiInstance } from '@/shared/api/_base';

const BASE_URL = 'callback/';

const send = async (model: CallBackModel) => {
    return await apiInstance.post(BASE_URL + 'send-callback', model);
};

export const postCallbackApi = {
    send,
};
