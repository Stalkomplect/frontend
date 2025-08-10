import { FC } from 'react';
import { ProductProp } from '../../types';
import { useProductListContext } from '@/features/product/context/product-list';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/components/ui/dialog';
import styles from './styles.module.scss';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/shared/ui/components/ui/carousel';

const noPhoto =
    'https://static.vecteezy.com/system/resources/previews/019/787/070/non_2x/no-photos-and-no-phones-forbidden-sign-on-transparent-background-free-png.png';

export const ProductCard: FC<ProductProp> = ({ product }) => {
    const { isInCart, changeItemState } = useProductListContext();

    return (
        <Dialog>
            <div className={styles.card}>
                <section className={styles.card__header}>
                    <img
                        className={styles.card__header__img}
                        src={
                            product.productMedias[0]
                                ? product.productMedias[0].link
                                : noPhoto
                        }
                    />
                    <div onClick={() => changeItemState(product)}>
                        <svg
                            className={`${styles.card__header__svg} ${
                                isInCart(product.id) ? styles.inCart : ''
                            }`}
                            xmlns='http://www.w3.org/2000/svg'
                            width='40'
                            height='40'
                            viewBox='0 0 24 24'
                        >
                            <g stroke='#ffffff' width={2}>
                                <path d='M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z' />
                                <path d='m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2' />
                            </g>
                        </svg>
                    </div>
                </section>
                <DialogTrigger asChild>
                    <div className={styles.card__info}>
                        <h2>{product.name}</h2>
                        <div className={styles.card__info__additional}>
                            <h3>{product.number}</h3>
                        </div>
                    </div>
                </DialogTrigger>
            </div>
            <DialogContent className={styles.modal}>
                <DialogHeader className={styles.modal__header}>
                    <DialogTitle className={styles.modal__header__title}>
                        {product.name}
                    </DialogTitle>
                    <DialogTitle className={styles.modal__header__subtitle}>
                        {product.number}
                    </DialogTitle>
                </DialogHeader>
                <section className={styles.modal__body}>
                    <section className={styles.modal__body__info}>
                        <section className={styles.modal__body__info__imgs}>
                            {product.productMedias.length >= 1 ? (
                                <Carousel
                                    className={
                                        styles.modal__body__info__imgs__carousel
                                    }
                                >
                                    <CarouselContent>
                                        {product.productMedias.map((media) => (
                                            <CarouselItem key={media.id}>
                                                <img
                                                    className={
                                                        styles.modal__body__info__imgs__img
                                                    }
                                                    src={media.link}
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            ) : (
                                <img
                                    className={
                                        styles.modal__body__info__imgs__img
                                    }
                                    src={noPhoto}
                                    alt='nophoto'
                                />
                            )}
                        </section>
                    </section>
                </section>
            </DialogContent>
        </Dialog>
    );
};
