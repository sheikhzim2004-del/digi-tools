import { Play } from "lucide-react";
import bannerImg from "../../assets/products/banner.png";

const Banner = () => {
  return (
    <section className="my-container flex justify-between items-center gap-5  min-h-screen flex-col md:flex-row pt-4">
      {/* hero content */}
      <div className="py-14 mt-4 md:py-0 md:mt-4">
        <div className="flex items-center gap-2 bg-[#e1e7ff] py-2 px-3 rounded-full w-fit ">
          <span className="w-3 h-3 bg-linear-to-r from-[#5743ec] to-[#9B5CF6] rounded-full"></span>

          <p className="text-sm font-medium">New: AI-Powered Tools Available</p>
        </div>

        <h2 className="text-[clamp(3rem,5vw,3.75rem)] font-bold">
          Supercharge Your <br />
          <span className="bg-linear-to-r from-[#5743ec] to-[#9B5CF6] bg-clip-text text-transparent ">
            {" "}
            Digital Workflow
          </span>{" "}
        </h2>
        <p className="text-md text-gray-500">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        {/* CTA button  */}
        <div className="space-x-4 mt-6">
          <button className="btn bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] rounded-full text-white font-medium shadow-xl border ">
            <a href="#">Explore Products</a>
          </button>
          <button className="btn font-medium rounded-full border-[1.5px] border-[#4F39F6] shadow text-[#1b00e4]">
            <Play />
            <a href="#">Watch Demo</a>
          </button>
        </div>
      </div>

      {/* hero image */}
      <div className="w-[clamp(18rem,50vw,27.5rem)]">
        <img
          className="w-full h-auto block"
          src={bannerImg}
          alt="Banner image DigiTools"
        />
      </div>
    </section>
  );
};

export default Banner;
