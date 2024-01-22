const Contact = () => {
  return (
    <section
      className="flex flex-col pb-20  md:pb-40 px-3 md:px-[60px] xl:px-[82px]"
      id="contact"
    >
      <p className="text-[#a6aec2] text-[1.5rem] lg:text-[2rem] text-center hidden lg:block">
        <span className="text-[#ec4899]">03.</span> Contact me!
      </p>

      <div className="flex gap-8 items-center lg:hidden">
        <p className="text-[#a6aec2] text-[1.2rem]">
          <span className="text-[#ec4899]">03.</span> Contact me!
        </p>
        <div className="h-[1px] w-[180px] bg-[#ec4899]"></div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-5 ">
        <p className="text-[#a6aec2] text-[2rem] lg:text-[3rem] font-bold">
          Get in touch
        </p>
        <div className="w-2 h-2 rounded-full bg-[#a6aec2]"></div>
      </div>
      <p className="text-[#a6aec2] text-center lg:w-[50%] mx-auto text-[1.2rem] md:text-[1.5rem] mt-10">
        I am always open to new opportunities, lets build something! From simple
        landing pages to huge projects, freelance jobs, etc. If you have other
        requests or questions, please by all means.. slide in!
      </p>
      <a href="mailto:mirabelugoji@gmail.com" className="w-fit  mx-auto mt-20">
        <button className="w-fit border border-[#ec4899] text-[#a6aec2] py-3 px-8">
          Send a message
        </button>
      </a>
    </section>
  );
};

export default Contact;
