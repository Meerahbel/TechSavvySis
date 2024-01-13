const Work3 = () => {
  return (
    <div className="flex flex-col bg-[#1c1e22] p-5 rounded-md drop-shadow-xl">
      <img
        src="/images/time.png"
        alt="project"
        className="h-[200px] w-[350px] object-cover"
      />
      <p className="text-[#ec4899] font-semibold py-2">TimeNow</p>
      <p className="text-[#a6aec2]">
        A landing page to display my expertise with grid and flex.
      </p>
      <a
        href="https://github.com/Meerahbel/TimeNow"
        target="/"
        className="text-[#a6aec2] underline pb-8"
      >
        View code
      </a>

      <div className="flex gap-2">
        <div className="flex gap-2 w-fit p-2 bg-[#121418] rounded-lg items-center">
          <p className="text-[#a6aec2]">HTML</p>
          <img src="/images/html.png" alt="react icon" className="w-3 h-3" />
        </div>
        <div className="flex gap-2 w-fit p-2 bg-[#121418] rounded-lg items-center">
          <p className="text-[#a6aec2]">Tailwind</p>
          <img
            src="/images/tailwind.png"
            alt="react icon"
            className="w-3 h-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Work3;
