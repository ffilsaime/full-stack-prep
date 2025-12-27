export interface ProductImpl extends PriceImpl{
    productId: number;
    imageUrl: string;
    name: string;
    description: string;
    popularity: string;
}

export interface PriceImpl {
    currency?: string;
    price: number;
}