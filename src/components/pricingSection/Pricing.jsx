import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch("pricingData.json")
      .then((res) => res.json())
      .then((data) => setPricingData(data));
  }, []);

  return (
    <section className="my-container my-[clamp(7rem,6vw,7.5rem)]">
      {/* heading */}
      <h2 className="text-[clamp(2.75rem,5vw,3rem)] font-bold mb-2 text-center">
        Simple, Transparent Pricing
      </h2>
      <p className="text-sm text-gray-400 mb-8 text-center">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      {/* card */}
      <div className="grid  md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
