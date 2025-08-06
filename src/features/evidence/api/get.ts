import { Evidence } from '@/entities/evidence';
import { apiInstance } from '@/shared/api/_base';

const BASE_URL = 'evidences/';

const getAll = async (): Promise<Evidence[]> => {
    return await apiInstance.get(BASE_URL + 'get-all');
};

export const getEvidenceApi = {
    getAll,
};
