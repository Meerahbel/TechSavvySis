import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Aboutme = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="pb-20 md:pb-40 px-3 md:px-[60px] xl:px-[82px]"
      id="about"
    >
      <div className="flex gap-10 items-center pb-5">
        <p className="text-[#a6aec2] text-[1.5rem] lg:text-[2rem]">
          <span className="text-[#ec4899]">01.</span> About me
        </p>
        <div className="h-[1px] w-[200px] lg:w-[300px] bg-[#ec4899]"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-0">
        <div className="flex flex-col gap-10 lg:w-[60%] mt-10">
          <p className="text-[#a6aec2] text-[1.5rem] lg:text-[2rem]">
            Hey, there! I’m a passionate and innovative Frontend Developer with
            a keen eye for design and a commitment to crafting engaging and
            responsive user interfaces.
          </p>
          <a href="" className="w-fit">
            <button className="border border-[#ec4899] text-[#ec4899] w-fit py-3 px-10 rounded-sm hover:bg-[#ec4899]/20 transition-all ease-in-out">
              View my resume
            </button>
          </a>
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="flex justify-center md:justify-start"
        >
          <div className="w-[350px] md:w-[800px] lg:w-[300px] h-[400px] drop-shadow-xl bg-[#1c1e22] rounded-md grid grid-cols-2 px-5 md:px-10 lg:px-5 pt-8">
            <div className="flex gap-2 w-fit h-fit border border-[#ec4899] p-3 rounded-md stack-hold">
              <p className="text-[#a6aec2]">HTML</p>
              <img src="/images/html.png" alt="html icon" className="w-6 h-6" />
            </div>
            <div className="flex gap-2 w-fit h-fit border border-[#ec4899] p-3 rounded-md stack-hold">
              <p className="text-[#a6aec2]">CSS</p>
              <img src="/images/css.png" alt="html icon" className="w-6 h-6" />
            </div>
            <div className="flex gap-2 w-fit h-fit border border-[#ec4899] p-3 rounded-md stack-hold">
              <p className="text-[#a6aec2]">Tailwind</p>
              <img
                src="/images/tailwind.png"
                alt="html icon"
                className="w-6 h-6"
              />
            </div>
            <div className="flex gap-2 w-fit h-fit border border-[#ec4899] p-3 rounded-md stack-hold">
              <p className="text-[#a6aec2]">Javscript</p>
              <img
                src="/images/javascript.png"
                alt="html icon"
                className="w-6 h-6"
              />
            </div>
            <div className="flex gap-2 w-fit h-fit border border-[#ec4899] p-3 rounded-md stack-hold">
              <p className="text-[#a6aec2]">React</p>
              <img
                src="/images/react.png"
                alt="html icon"
                className="w-6 h-6"
              />
            </div>
            <div className="flex gap-2 w-fit h-fit border border-[#ec4899] p-3 rounded-md stack-hold">
              <p className="text-[#a6aec2]">Firebase</p>
              <img
                src="/images/firebase.png"
                alt="html icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
