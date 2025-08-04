export interface Product {
    id: string;
    name: string;
    number: string;
    price: number;
    categoryId: string;
    productMedias: ProductMedia[];
}

export interface ProductMedia {
    id: string;
    link: string;
}

export interface ProductCardComponent {
    product: Product;
}
