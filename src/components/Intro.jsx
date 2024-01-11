const Intro = () => {
  return (
    <main className="py-40 md:pt-28  px-3 md:px-[60px] min-h-screen">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col font-bold">
          <p className="pr-2 text-white text-[2rem] md:text-[4rem] lg:text-[6rem]">
            Mirabel..
          </p>
          <p className="pr-2 text-white text-[2rem] md:text-[4rem] lg:text-[6rem]">
            Frontend Developer
          </p>
          <p className="text-[#ec4899] text-[1rem] md:text-[2rem]">
            Bringing Ideas to Life with Code and Creativity.
          </p>
        </div>
        <button className="border border-[#ec4899] text-[#ec4899] w-fit py-3 px-10 rounded-sm hover:bg-[#ec4899]/20 transition-all ease-in-out">
          Contact me!
        </button>
      </section>
      <button className="bg-[#ec4899] md:hidden text-[#121418] w-fit py-3 px-10 rounded-sm mt-5 font-semibold">
        View resume
      </button>
    </main>
  );
};

export default Intro;
