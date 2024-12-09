import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div id="price" className="pt-16 pb-16 b-[#edfbff]">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Meet exciting Pricing Plans
      </h2>
      <div className="w-[90%] md:w-[80%] mt-20 m-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard price={15} plan="Starter" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PriceCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
};

export default Price;