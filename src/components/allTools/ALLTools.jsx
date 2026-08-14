import { use, useState } from "react";
import AllProduct from "./AllProduct";
import SelectedProductCart from "./SelectedProductCart";

const ALLTools = ({ productDataFetch,addToCart, setAddToCart}) => {
  const productData = use(productDataFetch);
  // console.log(productData);

  const [selected, setSelected] = useState("allProduct");

  return (
    <section className="my-container">
      <div>
        {/* heading */}
        <h2 className="text-[clamp(2.75rem,5vw,2.75rem)] font-bold mb-2 text-center ">
          Premium Digital Tools
        </h2>
        <p className="text-gray-300 text-center">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        {/* CTA button  */}
        <div className="space-x-1 mx-auto mt-6 flex items-center text-center  shadow-3xl  bg-gray-100 w-50 h-12.5 px-1.75 py-6 rounded-full">
          {/* all product */}
          <button
            onClick={() => setSelected("allProduct")}
            className={`btn rounded-full  font-medium duration-500 transition-all ${selected === "allProduct" ? "bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] text-white " : " text-black"} `}
          >
            Products
          </button>
          {/* selected cart btn */}
          <button
            onClick={() => setSelected("selectedCart")}
            className={`btn rounded-full font-medium px-5.5 duration-500 transition-all ${selected === "selectedCart" ? "bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] text-white  duration-500 transition-all" : " text-black"} `}
          >
            Cart ({addToCart.length})
          </button>
        </div>

        {/* component toggle */}
        <div className="mt-10">
          {selected === "allProduct" ? (
            <div>
              <AllProduct productData={productData}  addToCart={addToCart} setAddToCart={setAddToCart}/>
            </div>
          ) : (
            <SelectedProductCart  addToCart={addToCart} setAddToCart={setAddToCart}/>
          )}
        </div>
      </div>
    </section>
  );
};

export default ALLTools;
