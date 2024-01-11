import { IPropsProduct } from "../../types";

const Product = ({ product }: IPropsProduct) => {
    return (<>
        {product.id} : {product.title}
    </>
    )
}

export default Product;