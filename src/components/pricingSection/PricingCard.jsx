const PricingCard = ({ pricing }) => {
  

  const { plan, subtitle, price, period, features, buttonText, tag } = pricing;

  return (
    <div
      className={`card mx-auto w-full shadow-lg relative  rounded-xl ${
        tag === "Most Popular"
          ? "bg-linear-to-r from-[#4F39F6] to-[#9B5CF6] text-white"
          : "bg-white"
      }`}
    >
      <div className={`card-body space-y-1`}>
        {tag == "Most Popular" && (
          <span className="badge badge-xs badge-warning bg-amber-200 py-3 rounded-full border-none px-4 text-amber-800 absolute left-1/2 -translate-x-1/2 -top-3">
            {tag}
          </span>
        )}
        <div>
          <div>
            <h2 className="text-3xl font-bold">{plan}</h2>
            <p
              className={`${tag == "Most Popular" ? "text-white " : "text-gray-500"}`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl">
            <span className="font-bold text-4xl">${price}</span>/
            <span
              className={`${tag == "Most Popular" ? "text-white " : "text-gray-500"}`}
            >
              {period}
            </span>
          </p>
        </div>

        <ul className="mt-6 flex flex-col flex-1 gap-2 text-xs">
          {features.map((feature, ind) => (
            <li key={ind}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                // stroke="black"
                stroke={`${tag === "Most Popular" ? "white" : "green"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span
                className={`${tag == "Most Popular" ? "text-white " : "text-gray-500"}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <button
            className={`w-full rounded-full px-5 py-2 cursor-pointer font-bold ${
              tag === "Most Popular"
                ? "bg-white text-[#4F39F6] border border-white"
                : "bg-gradient-to-r from-[#4F39F6] to-[#9B5CF6] text-white"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
