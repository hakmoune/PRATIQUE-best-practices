import { useEffect, useState } from "react"
import { TProducts } from "../types";

export const useProducts = () => {
    const [products, setProducts] = useState<TProducts | null>(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({ products }) => setProducts(products))
            .catch(e => console.error("Faild to fetch", e))
    }, []);

    return { products, setProducts }
}