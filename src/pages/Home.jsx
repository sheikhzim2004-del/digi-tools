import { Suspense, useState } from "react";
import ALLTools from "../components/allTools/ALLTools";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Rating from "../components/ratingSection/Rating";
import { ToastContainer } from "react-toastify";
import Choose from "../components/chooseSection/Choose";
import Pricing from "../components/pricingSection/Pricing";
import CTASection from "../components/ctaSection/CTASection";
import Footer from "../components/footer/Footer";

const productDataFetch = fetch("/productData.json").then((res) => res.json());

const Home = () => {

const [addToCart,setAddToCart]=useState([])

  return (
    <div>
      <Navbar addToCart={addToCart}/>

      <Banner />

      <div className="bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6]">
        <Rating />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
      >
        <ALLTools productDataFetch={productDataFetch} addToCart={addToCart} setAddToCart={setAddToCart}/>
      </Suspense>

      <Choose />

      <Pricing></Pricing>

      <CTASection></CTASection>

      <Footer></Footer>

      <ToastContainer/>
    </div>
  );
};

export default Home;
