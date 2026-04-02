import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({productPromise,carts,setCarts}) => {
    const productData = use(productPromise);
    
    return (
        <div className="md:grid grid-cols-3 gap-10 mx-auto max-w-7xl px-4 m-5">
            {
                productData?.map(product => <ProductCard key={product?.id} product={product} carts={carts} setCarts={setCarts} />)
            }
        </div>
    );
};

export default Products;