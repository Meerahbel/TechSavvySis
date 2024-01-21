const Intro = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pb-40 pt-48 md:pt-28  px-3 md:px-[60px] min-h-screen">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col font-bold">
          <p className="pr-2 text-white text-[4rem] md:text-[4rem] lg:text-[6rem]">
            Mirabel..
          </p>
          <p className="pr-2 text-white text-[2.5rem] md:text-[4rem] lg:text-[6rem]">
            Frontend Developer
          </p>
          <p className="text-[#ec4899] text-[1.5rem] md:text-[2rem] w-[80%] md:w-full">
            Bringing Ideas to Life with Code and Creativity.
          </p>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="border border-[#ec4899] text-[#ec4899] w-fit py-3 px-10 rounded-sm hover:bg-[#ec4899]/20 transition-all ease-in-out"
        >
          Contact me!
        </button>
      </section>
      <button className="bg-[#ec4899] md:hidden text-[#121418] w-fit py-3 px-10 rounded-sm mt-5 font-semibold">
        View resume
      </button>
      <p className="md:hidden text-[#a6aec2] font-medium bounce relative top-[230px] md:top-[480px] left-[-48%] md">
        Scroll down
      </p>
    </main>
  );
};

export default Intro;
