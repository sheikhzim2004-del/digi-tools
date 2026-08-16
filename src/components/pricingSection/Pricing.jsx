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
