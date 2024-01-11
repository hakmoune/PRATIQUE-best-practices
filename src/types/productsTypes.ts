export type TProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]
};

export type TProducts = TProduct[] | null;

export type TSetProducts = React.Dispatch<React.SetStateAction<TProducts | null>>;

export interface IPropsProduct {
    product: TProduct;
}

export interface IPropsProductAdd {
    products: TProducts;
    setProducts: TSetProducts;
}

export interface IPropsProductDelete extends IPropsProductAdd {
    id: number;
}