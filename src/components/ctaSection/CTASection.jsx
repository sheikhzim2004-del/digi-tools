
const CTASection = () => {
  return (
    <section className="my-container">
      <div className="py-[clamp(3rem,6vw,7.5rem)] space-y-7">
        {/* heading content  */}
        <h2 className="text-[clamp(2.75rem,5vw,2.75rem)] font-bold mb-2 text-center text-white">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-gray-300 text-center">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>

        {/* CTA button */}
        <div className="space-x-4  text-center">
          <button className="btn bg-white rounded-full border py-5 px-5 font-medium">
            <span className="bg-gradient-to-r from-[#321ae9] to-[#8e40fa] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button className="btn font-medium rounded-full border-[1.5px] border-white border-[#4F39F6] bg-transparent shadow text-white py-5 px-7 ">
            <a href="#">View Pricing</a>
          </button>
        </div>
        <p className="text-gray-300 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
