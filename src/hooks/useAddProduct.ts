import { useRef } from 'react';
import { TProducts, TSetProducts } from '../types';

const useAddProduct = (
    setProducts: TSetProducts,
    products: TProducts
) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const addProduct = async () => {
        try {
            if (inputRef.current && products) {
                const response = await fetch('https://dummyjson.com/products/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: inputRef.current.value,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to add product');
                }

                const data = await response.json();

                setProducts([data, ...products]);
            }
        } catch (error) {
            console.error('Failed to add product', error);
        }
    };

    return { inputRef, addProduct };
};

export default useAddProduct;
