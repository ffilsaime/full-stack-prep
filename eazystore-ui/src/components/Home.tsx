import PageHeading from "./PageHeading.tsx";
import ProductListings from "./ProductListings.tsx";
//import products from "../data/products/Products.ts";
import apiClient from "../api/apiClient.ts";
import {useState, useEffect} from "react";

export default function Home(){
    const [products, setProducts] = useState([]);

    // Run once when the component mounts
    // Mounting is the process of creating and adding the component into DOM
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await apiClient.get("/products"); //Axios get request
        setProducts(response.data);
    };

    return (
        <div className="home-container">
            <PageHeading title="Explore Eazy Stickers">
                Add a touch of creativity to your space with our wide range of fun and unique stickers.
                Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}