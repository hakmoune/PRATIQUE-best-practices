import { useProducts } from "../../hooks/useProducts";
import Product from "./Product";
import ProductAdd from "./ProductAdd";
import ProductDelete from "./ProductDelete";


const ProductsList = () => {
    const { products, setProducts } = useProducts();

    return (
        <>
            <ProductAdd products={products} setProducts={setProducts} />
            <ul>
                {products?.map(product =>
                    <li key={product.id}>
                        <Product product={product} />
                        <ProductDelete id={product.id} products={products} setProducts={setProducts} />
                    </li>
                )}
            </ul>
        </>
    )
};

export default ProductsList;