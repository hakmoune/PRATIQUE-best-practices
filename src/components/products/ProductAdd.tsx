import { IPropsProductAdd } from "../../types";
import useAddProduct from "../../hooks/useAddProduct";

const ProductAdd = ({ products, setProducts }: IPropsProductAdd) => {
    const { inputRef, addProduct } = useAddProduct(setProducts, products)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addProduct();
    };

    return (<div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Add New Product</button>
    </div>
    )
}

export default ProductAdd;


