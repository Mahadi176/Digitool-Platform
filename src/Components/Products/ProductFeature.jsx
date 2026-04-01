import React from 'react';
import { Check } from 'lucide-react';

const ProductFeature = ({feature}) => {
    return (
       <div className='flex items-center gap-2'>
        <div className='text-green-500'><Check /></div>
        <p>{feature}</p>
      </div>
    );
};

export default ProductFeature;