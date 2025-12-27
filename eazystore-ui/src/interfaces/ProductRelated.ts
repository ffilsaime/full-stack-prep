export interface ProductCardImpl {
    productId: number,
    product: ProductImpl
}

export interface ProductImpl extends PriceImpl{
    imageUrl: string;
    name: string;
    description: string;
}

export interface PriceImpl {
    currency: string;
    price: number;
}