import PageHeading from "./PageHeading.tsx";
import ProductListings from "./ProductListings.tsx";
import products from "../data/products/Products.ts";
import type {ProductCardImpl} from "../interfaces/ProductRelated.ts";

export default function Home(){

    const getProductCardImpl = () : ProductCardImpl[] => {
        let cardList : ProductCardImpl[] = [];
        for (let i = 0; i < products.length; i++){
            let newElement : ProductCardImpl = {
                productId: products[i].productId,
                product: {
                    imageUrl: products[i].imageUrl,
                    name: products[i].name,
                    description: products[i].description,
                    popularity: products[i].popularity,
                    price: products[i].price
                }
            }
            cardList.push(newElement);
        }
        return cardList;
    }

    return (
        <div className="home-container">
            <PageHeading title="Explore Eazy Stickers">
                Add a touch of creativity to your space with our wide range of fun and unique stickers.
                Perfect for any occasion!
            </PageHeading>
            <ProductListings products={getProductCardImpl()} />
        </div>
    );
}