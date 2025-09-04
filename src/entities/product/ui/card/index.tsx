import { FC } from "react";
import { ProductProp } from "../../types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/components/ui/carousel";
import { ShoppingCartButton } from "@/entities/shopping-cart";
import styles from "./styles.module.scss";

const noPhoto =
	"https://static.vecteezy.com/system/resources/previews/019/787/070/non_2x/no-photos-and-no-phones-forbidden-sign-on-transparent-background-free-png.png";

export const ProductCard: FC<ProductProp> = ({ product }) => {
	return (
		<Dialog>
			<div className={styles.card}>
				<section className={styles.card__header}>
					<img
						className={styles.card__header__img}
						src={product.productMedias[0] ? product.productMedias[0].link : noPhoto}
					/>
					<ShoppingCartButton product={product} />
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
					<DialogTitle className={styles.modal__header__title}>{product.name}</DialogTitle>
					<DialogTitle className={styles.modal__header__subtitle}>{product.number}</DialogTitle>
				</DialogHeader>
				<section className={styles.modal__body}>
					<section className={styles.modal__body__info}>
						<section className={styles.modal__body__info__imgs}>
							{product.productMedias.length >= 1 ? (
								<Carousel className={styles.modal__body__info__imgs__carousel}>
									<CarouselContent>
										{product.productMedias.map((media) => (
											<CarouselItem key={media.id}>
												<img
													className={styles.modal__body__info__imgs__img}
													src={media.link}
												/>
											</CarouselItem>
										))}
									</CarouselContent>
								</Carousel>
							) : (
								<img
									className={styles.modal__body__info__imgs__img}
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
