import { Evidence } from '@/entities/evidence';
import { create } from 'zustand';
import { getEvidenceApi } from '../api';

const { getAll } = getEvidenceApi;

interface EvidenceStore {
    evidences: Evidence[] | null;
    error: string | null;
    get: () => Promise<void>;
}

export const useEvidenceStore = create<EvidenceStore>((set) => ({
    evidences: null,
    error: null,
    get: async () => {
        set({ error: null });
        try {
            const data = await getAll();
            set({ evidences: data });
        } catch (error) {
            set({ error: 'Произошла ошибка при получении свидетельств!' });
        }
    },
}));
