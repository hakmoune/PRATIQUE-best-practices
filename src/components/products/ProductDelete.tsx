import { IPropsProductDelete } from "../../types";


const ProductDelete = ({ id, products, setProducts }: IPropsProductDelete) => {

    const handleDeleteProoduct = (): void => {
        if (products)
            setProducts(
                products.filter(product => product.id !== id)
            )
    }

    return (<>
        <button onClick={handleDeleteProoduct}>Delete</button>
    </>
    )
}

export default ProductDelete;