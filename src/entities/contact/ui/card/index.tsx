import { FC } from 'react';
import { ContactProp } from '../../types';
import styles from './styles.module.scss';

export const ContactCard: FC<ContactProp> = ({
    contacts,
    info,
    label,
    action,
}) => (
    <div className={styles.card}>
        <h1>{label}</h1>
        {contacts
            .filter((c) => c.info == info)
            .map((contact) => (
                <div
                    key={contact.id}
                    onClick={() => action?.(contact.value)}
                    className={styles.card__info}
                >
                    <p>{contact.name}:</p>
                    <p>{contact.value}</p>
                </div>
            ))}
    </div>
);
