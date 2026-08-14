const ChooseCard = ({ details }) => {
  return (
    <div className="card  bg-base-100 w-full shadow-lg p-4">
      {/* step */}
      <div className="flex justify-center  w-[50px] h-[50px] rounded-full bg-linear-to-r from-[#5743ec] to-[#9B5CF6] ml-auto">
        <p className="flex items-center justify-center text-2xl text-white font-medium">
          {details.step}
        </p>
      </div>

      {/* card content */}
      <div className="card-body py-12">
        <div className="bg-[#f0e9fe] rounded-full mx-auto w-[100px] h-[100px] flex items-center mb-5">
          <img className=" mx-auto  " src={details.image} alt={details.title} />
        </div>
        <div className="text-center space-y-5 flex-1 mb-8">
          <h2 className="text-2xl  font-bold">{details.title}</h2>
          <p className="text-lg text-gray-400">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
