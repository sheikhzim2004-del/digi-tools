import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="my-container ">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-[clamp(7rem,6vw,7.5rem)] pb-[clamp(2.5rem,5vw,5rem)]">
        {/* logo  */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-100">DigiTools</h2>
          <p className=" text-gray-400 hover:text-white cursor-pointer ">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <ul className="space-y-3">
          <p className="text-xl text-gray-100">Product</p>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Features</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Pricing</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Templates</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Integrations</a>
          </li>
        </ul>

        {/* Company */}
        <ul className="space-y-3">
          <p className="text-xl text-gray-100">Company</p>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">About</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Blog</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Careers</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Press</a>
          </li>
        </ul>

        {/* Resources */}
        <ul className="space-y-3">
          <p className="text-xl text-gray-100">Resources</p>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Documentation</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Help Center</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Community</a>
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer ">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* social links */}
        <div>
          <p className="text-xl text-gray-100">Social Links</p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaInstagram className="cursor-pointer  text-white  hover:text-pink-500 transition" />
            <FaFacebook className="cursor-pointer   text-white hover:text-blue-600 transition" />
            <FaXTwitter className="cursor-pointer   text-white hover:text-yellow-400 transition" />
          </div>
        </div>
      </div>

      <hr className="text-gray-500/90 " />

      <div className="flex justify-between py-7 flex-col md:flex-row space-y-4 items-center ">
        <p className="text-gray-400 text-sm hover:text-white cursor-pointer block">
          © 2026 Digitools. All rights reserved.
        </p>
        <ul className="text-gray-400 text-sm flex gap-8">
          <li className="hover:text-white cursor-pointer ">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer ">Terms of Service</li>
          <li className="hover:text-white cursor-pointer ">Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
