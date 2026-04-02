import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ price }) => {
  return (
    <>
      {price?.isPopular ? (
        <div className="bg-violet-700 text-white rounded-4xl p-4 w-full flex flex-col mb-3 shadow-xl">
          <h1 className="text-5xl font-bold">{price?.name}</h1>
          <p className="my-3">{price?.tagline}</p>
          <div className="flex items-center gap-2 my-5">
            <h1 className="text-3xl font-bold">$ {price?.price}</h1>
            <p>/ Month</p>
          </div>
          <div className="mb-5 flex-1 ">
            {price?.features?.map((feature, index) => (
              <PricingFeature key={index} feature={feature} />
            ))}
          </div>
          <button className="btn w-full rounded-full bg-white text-purple-700">
            {price?.buttonText}
          </button>
        </div>
      ) : (
        <div className="bg-base-200 rounded-4xl p-4 w-full flex flex-col mb-3 shadow-xl">
          <h1 className="text-5xl font-bold">{price?.name}</h1>
          <p className="my-3">{price?.tagline}</p>
          <div className="flex items-center gap-2 my-5">
            <h1 className="text-3xl font-bold">$ {price?.price}</h1>
            <p>/ Month</p>
          </div>
          <div className="mb-5 flex-1 ">
            {price?.features?.map((feature, index) => (
              <PricingFeature key={index} feature={feature} />
            ))}
          </div>
          <button className="btn w-full rounded-full bg-purple-700 text-white ">
            {price?.buttonText}
          </button>
        </div>
      )}
    </>
  );
};

export default PricingCard;
