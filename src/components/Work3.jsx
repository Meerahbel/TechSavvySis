const Work3 = ({ handleMouseout, handleOver, boxHover }) => {
  return (
    <div
      id="box3"
      onMouseOver={() => handleOver("box3")}
      onMouseOut={handleMouseout}
      className="flex flex-col bg-[#1c1e22] p-5 rounded-md drop-shadow-xl"
    >
      <div className="relative">
        <img
          src="/images/time.png"
          alt="project"
          className="h-[200px] w-[350px] object-cover"
        />
        {boxHover === "box3" && (
          <div className="bg-[#ec4899]/30 absolute left-0 top-0 w-full h-full flex items-center spread">
            <div className="w-[150px] h-[130px] bg-[#ec4899]/50 mx-auto border-2 border-[#ec4899] rounded-md flex flex-col items-center justify-center gap-2 rush">
              <div className="flex gap-2 bg-[#121418] w-fit p-1 mx-auto">
                <img
                  src="/images/html.png"
                  alt="react icon"
                  className="w-6 h-6"
                />
                <img
                  src="/images/tailwind.png"
                  alt="tailwind icon"
                  className="w-6 h-6"
                />
              </div>
              <a
                href="https://time-now-two.vercel.app/"
                target="/"
                className="w-fit"
              >
                <button className="bg-[#121418] w-fit px-4 py-1 text-[#ec4899] rounded-md">
                  View
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
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
