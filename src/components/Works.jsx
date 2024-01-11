const Works = () => {
  return (
    <section className="pb-40 px-3 md:px-[60px]">
      <div className="flex gap-10 items-center">
        <div className="h-[1px] w-[200px] lg:w-[400px] bg-[#ec4899]"></div>
        <p className="text-[#a6aec2] text-[1.5rem] lg:text-[2rem]">
          <span className="text-[#ec4899]">02.</span> Works
        </p>
        <div className="h-[1px] w-[200px] lg:w-[400px] bg-[#ec4899]"></div>
      </div>
      <p className="text-[#a6aec2] text-[1.2rem]">
        A small gallery of some websites I've built.{" "}
        <span className="text-[#ec4899]">
          <a href="https://github.com/Meerahbel?tab=repositories" target="/">
            There's more
          </a>
        </span>{" "}
        from where these came.
      </p>
      <p className="text-[#a6aec2] text-[1.2rem]">
        Click each project to view.
      </p>
    </section>
  );
};

export default Works;
