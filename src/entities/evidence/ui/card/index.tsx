import React, { FC } from 'react';
import { EvidenceProp } from '../../types';
import styles from './styles.module.scss';

export const EvidenceCard: FC<EvidenceProp> = ({
    evidence,
    action,
    isOpen,
}) => {
    const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

    return isOpen ? (
        <div className={styles.modal} onClick={action}>
            <div className={styles.modal__content} onClick={handleContentClick}>
                <img
                    onClick={action}
                    src={evidence.link}
                    alt='evidence'
                    className={styles.modal__img}
                />
            </div>
        </div>
    ) : null;
};
