import { Product } from "@/entities/product";
import { useProductListContext } from "@/features/product/context/product-list";
import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
	product: Product;
};
export const ShoppingCartButton: FC<Props> = ({ product }) => {
	const { isInCart, changeItemState } = useProductListContext();

	return (
		<div onClick={() => changeItemState(product)}>
			<svg
				className={`${styles.svg} ${isInCart(product.id) ? styles.inCart : ""}`}
				xmlns='http://www.w3.org/2000/svg'
				width='40'
				height='40'
				viewBox='0 0 24 24'
			>
				<g
					stroke='#ffffff'
					width={2}
				>
					<path d='M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z' />
					<path d='m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2' />
				</g>
			</svg>
		</div>
	);
};
