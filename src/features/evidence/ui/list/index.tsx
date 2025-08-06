import { FC, useEffect, useState } from 'react';
import { useEvidenceStore } from '../..';
import { EvidenceCard } from '@/entities/evidence';
import styles from './styles.module.scss';

export const EvidenceList: FC = ({}) => {
    const { get, evidences } = useEvidenceStore();
    const [selected, setSelected] = useState<string | null>();

    useEffect(() => {
        const fetchData = async () => await get();
        fetchData();
    }, [get]);

    const open = (id: string) => {
        setSelected(id);
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        setSelected(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <ul className={styles.list}>
                {evidences?.map((evidence) => (
                    <li key={evidence.id}>
                        <div
                            className={styles.list__thumbnail}
                            onClick={() => open(evidence.id)}
                        >
                            <img
                                src={evidence.link}
                                alt='evidence'
                                className={styles.list__thumbnail__img}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            {selected && (
                <EvidenceCard
                    evidence={evidences?.find((e) => e.id === selected)!}
                    isOpen={true}
                    action={close}
                />
            )}
        </>
    );
};
