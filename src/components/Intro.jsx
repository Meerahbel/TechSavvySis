import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Laptop from "./Laptop";

const Intro = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="pb-40 pt-48 md:pt-28 xl:pt-40  px-3 md:px-[60px] xl:px-[82px] min-h-screen">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col font-bold z-[999]">
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="pr-2 text-white text-[4rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] leading-tight"
          >
            Mirabel..
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="pr-2 text-white text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem]"
          >
            Frontend Developer
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="text-[#ec4899] text-[1.5rem] md:text-[2rem] xl:text-[2.8rem] w-[80%] md:w-full"
          >
            Bringing Ideas to Life with Code and Creativity.
          </p>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          data-aos="fade-right"
          data-aos-delay="700"
          className="border border-[#ec4899] text-[#ec4899] w-fit py-3 px-10 rounded-sm hover:bg-[#ec4899]/20 transition-all ease-in-out"
        >
          Contact me!
        </button>
      </section>
      <a href="MyResume.pdf" target="/" className="w-fit">
        <button
          data-aos="fade-right"
          data-aos-delay="900"
          className="bg-[#ec4899] md:hidden text-[#121418] w-fit py-3 px-10 rounded-sm mt-5 font-semibold"
        >
          View resume
        </button>
      </a>
      <p className="md:hidden text-[#a6aec2] font-medium bounce relative top-[230px] md:top-[480px] left-[-48%] md">
        Scroll down
      </p>
      <Laptop />
    </main>
  );
};

export default Intro;
