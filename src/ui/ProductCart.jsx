import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductCart = ({ product, addToCart, setAddToCart }) => {
  const { name, description, price, period, tag, features, icon } = product;

  const [isSelected, setIsSelected] = useState(false);

  //   add cart
  const handleAddToCart = (product) => {
    const isExits = addToCart.find((cart) => cart.id == product.id);
    if (isExits) {
      toast.error("Already added to cart ❌");
      return;
    } else {
      setIsSelected(true);
      setAddToCart([...addToCart, product]);
      toast.success("Added to cart 🛒");
    }
  };

  //   console.log(addToCart);

  return (
    <section>
      <div className={`card mx-auto w-full shadow-lg relative  rounded-xl `}>
        {/* badge rendering dynamically */}
        <div className={`card-body space-y-1 `}>
          {tag == "best seller" ? (
            <span className="badge badge-xs badge-warning bg-amber-200 py-3 rounded-full border-none px-4 text-amber-800 ml-auto">
              {tag}
            </span>
          ) : tag == "popular" ? (
            <span className="badge badge-xs badge-warning bg-indigo-200 py-3 rounded-full border-none px-4 text-indigo-800 text-[12px] ml-auto">
              {tag}
            </span>
          ) : (
            <span className="badge badge-xs badge-warning bg-green-200 py-3 rounded-full border-none px-4 text-green-800 text-[12px] ml-auto">
              {tag}
            </span>
          )}

          <div className="w-[50px] h-[50px] flex flex-2  ">
            <img src={icon} alt={name} />
          </div>
          <div >
            <div className="space-y-3 ">
              <p className="text-xl md:min-h-[60px] lg:min-h-[0px] font-bold mt-2">{name}</p>

              <p className={`text-gray-500 md:min-h-[80px]  lg:min-h-[60px]`}>{description}</p>
            </div>
          </div>

          <div>
            <p className="text-xl">
              <span className="font-bold text-2xl">${price}</span>/
              <span className={` text-[16px] text-gray-500`}>{period}</span>
            </p>
          </div>

          {/* feature  */}
          <ul className="mt-2 flex flex-col flex-1 gap-2 text-xs">
            {features.map((feature, ind) => (
              <li key={ind}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  // stroke="black"
                  stroke={`green`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className={`text-gray-500`}>{feature}</span>
              </li>
            ))}
          </ul>

          {/* add to cart button */}
          <div className="mt-3">
            <button
              onClick={() => handleAddToCart(product)}
              className={`w-full rounded-full px-5 py-2 cursor-pointer font-bold  ${isSelected ? "bg-green-500 text-white" : "bg-gradient-to-r from-[#4F39F6] to-[#9B5CF6] text-white"}
              `}
            >
              {isSelected ? (
                <span className="flex items-center justify-center gap-2">
                  <FaCheck /> Added to Cart!
                </span>
              ) : (
                "Buy Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
