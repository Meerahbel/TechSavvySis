const Intro = () => {
  return (
    <main className="py-10 px-3 md:px-[60px] min-h-screen">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col font-bold">
          <p className="pr-2 text-white text-[5rem]">Mirabel..</p>
          <p className="pr-2 text-white text-[5rem]">Frontend Developer</p>
          <p className="text-[#ec4899] text-[2rem]">
            Bringing Ideas to Life with Code and Creativity.
          </p>
        </div>
        <button className="border border-[#ec4899] text-[#ec4899] w-fit py-3 px-10">
          Contact me!
        </button>
      </section>
    </main>
  );
};

export default Intro;
