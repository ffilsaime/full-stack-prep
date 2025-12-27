import type {ProductCardImpl} from "../interfaces/ProductRelated.ts";
import ProductCard from "./ProductCard.tsx";

interface ProductListingsProps {
    products: ProductCardImpl[]
}

export default function ProductListings({products} : ProductListingsProps){

    return (
        <div className="product-listings-container">
            <div className="product-listings-grid">
                {
                    products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.productId} product={product.product} />
                        ))
                    ) : (
                        <p className="product-listings-empty">No products found</p>
                    )
                }
            </div>
        </div>
    );
}