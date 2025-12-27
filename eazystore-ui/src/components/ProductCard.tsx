import type {ProductImpl} from "../interfaces/ProductRelated.ts";
import Price from "./Price.tsx";

interface ProductCardProps {
    product: ProductImpl
}

export default function ProductCard ({product} : ProductCardProps) {

    return (
        <div className="product-card">
            <div className="product-card-image-container">
                <img src={product.imageUrl} alt={product.name} />
                <div className="product-card-details">
                    <h2 className="product-card-title">{product.name}</h2>
                    <p className="product-card-description">{product.description}</p>
                </div>
                <div className="product-card-footer">
                    <div className="product-card-price">
                        <Price currency="$" price={product.price} />
                    </div>
                </div>
            </div>
        </div>
    );
}