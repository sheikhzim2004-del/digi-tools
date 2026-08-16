
const Rating = () => {
  return (
    <section className="my-container my-[clamp(7rem,6vw,7.5rem)] ">
      <div className="grid grid-cols-1 sm:grid-cols-5 items-center justify-items-center w-full py-15 space-y-6 sm:space-y-0 ">
        <div className="text-center">
          <h2
            className="text-6xl mb-3 text-white font-semibold
        "
          >
            50K+
          </h2>
          <p className="text-gray-300">Active Users</p>
        </div>

        <div>
          <span className="block w-[3px] h-24 bg-gray-400 hidden sm:flex"></span>
        </div>
        <div className="text-center">
          <h2
            className="text-6xl mb-3 text-white font-semibold
        "
          >
            200+
          </h2>
          <p className="text-gray-300">Premium Tools</p>
        </div>

        <div>
          <span className="block w-[3px] h-24 bg-gray-400 hidden sm:flex"></span>
        </div>

        <div className="text-center">
          <h2
            className="text-6xl mb-3 text-white font-semibold
        "
          >
            4.9
          </h2>
          <p className="text-gray-300">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Rating;
