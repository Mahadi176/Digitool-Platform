import { use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
   
    return (
        <div className="md:p-20 max-w-7xl mx-auto  ">
       <div className="mx-auto text-center">
           <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
           <p className="my-5">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className="md:flex justify-center gap-10 p-4">
            {
                pricingData?.map(price =><PricingCard key={price?.id} price={price}/>)
            }
        </div>
        </div>
    );
};

export default Pricing;