export interface Product {
    id: string;
    name: string;
    number: string;
    price: number;
    categoryId: string;
    isInCart?: boolean;
    productMedias: ProductMedia[];
}

export interface ProductMedia {
    id: string;
    link: string;
}

