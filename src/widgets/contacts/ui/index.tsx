import { FC } from 'react';
import { ContactCard, ContactList } from '@/entities/contact';
import { callToast } from '@/features/toast/services';
import { EvidenceList } from '@/features/evidence';
import styles from './styles.module.scss';

export const Contacts: FC = ({}) => {
    const copyToClipboard = (value: string) => {
        try {
            navigator.clipboard.writeText(value);
            callToast(false, 'Успешно скопировано!');
        } catch (error) {
            callToast(true, 'Произошла ошибка при копировании объекта');
        }
    };

    return (
        <section className={`container-xl ${styles.place}`}>
            <h1 className={styles.place__header}>Информация</h1>
            <section className={styles.place__cards}>
                <ContactCard
                    action={copyToClipboard}
                    info='juridical'
                    contacts={ContactList}
                    label={'Юридическая информация'}
                />
                <section className={styles.place__cards__additional}>
                    <ContactCard
                        action={copyToClipboard}
                        info='contact'
                        contacts={ContactList}
                        label={'Контактная информация'}
                    />
                    <div className={styles.place__cards__additional__evidences}>
                        <h1>Свитедельства</h1>
                        <EvidenceList />
                    </div>
                </section>
            </section>
        </section>
    );
};
