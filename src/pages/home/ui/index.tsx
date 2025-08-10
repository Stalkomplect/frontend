import type { FC } from 'react';
import { CallBack } from '@/features/callback';
import { AboutUsPlace } from '@/widgets/home/about-us';
import { CategoryPlace } from '@/widgets/category';
import { PossibleProductsList } from '@/widgets/home';
import styles from './styles.module.scss';

export const HomePage: FC = () => {
    return (
        <>
            <section className={`${styles.landing}`}>
                <div className={`container-xl ${styles.landing__inner}`}>
                    <div className={styles.landing__inner__info_block}>
                        <h1>Завод по изготовлению Ж/Д запчастей</h1>
                        <h3>
                            Найдите нужную запчасть сами или предоставьте это
                            нам
                        </h3>
                    </div>
                    <CallBack />
                </div>
            </section>
            <section className='relative'>
                <AboutUsPlace />
            </section>
            <section className={`${styles.base_section} container-xl`}>
                <h1>Вам может понравится</h1>
                <PossibleProductsList />
            </section>
            <section className={`${styles.base_section} container-xl`}>
                <h1>Категории продукции</h1>
                <CategoryPlace type='page' />
            </section>
            <section
                className={`${styles.base_section} ${styles.map} container-xl`}
            >
                <h1>Мы на карте</h1>
                <iframe
                    style={{ marginBottom: '20px' }}
                    src='https://yandex.ru/map-widget/v1/?um=constructor%3A63c0217143c9d6715d24dc96496162e462fad8886d48c31b9fe31d7cfd9531ed&amp;source=constructor'
                    height='400'
                ></iframe>
            </section>
        </>
    );
};
