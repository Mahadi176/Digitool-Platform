import React, { useState } from 'react';
import ProductFeature from './ProductFeature';


const ProductCard = ({product,carts,setCarts}) => {
    
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () =>{
        setIsBuy(true)
        setCarts([...carts,product ])
    }

    return (
        <div className='max-w-80 p-4 border border-zinc-200 shadow-lg rounded-2xl'>
            {
              product.status === "best-seller" &&   <div className='flex justify-end'>
              <p className='p-1 bg-yellow-200 text-amber-900 w-25 rounded-full text-sm text-center'>Best Seller</p>
          </div>
            }
            {
              product.status === "popular" &&   <div className='flex justify-end'>
              <p className='p-1 bg-violet-300 text-violet-700 w-25 rounded-full text-sm text-center'>Popular</p>
          </div>
            }
            {
              product.status === "new" &&   <div className='flex justify-end'>
              <p className='p-1 bg-green-200 text-green-700 w-25 rounded-full text-sm text-center'>New</p>
          </div>
            }
        
            <img className='bg-base-200 rounded-full p-2 mb-4' src={product.image} alt="" />
            <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
            <p>{product.description}</p>
            <div className='flex items-center gap-2 mb-4'>
                <h1 className='text-xl font-bold'>${product.price}</h1>
                <p>/Month</p>
            </div>
            <div>
                {
                    product.features.map((feature,index)=> <ProductFeature key={index} feature={feature}/>)
                }
            </div>
            <button onClick={handleBuy} className='btn '>{isBuy ?  "Added to Cart !" : "Buy Now"}</button>
        </div>
    );
};

export default ProductCard;