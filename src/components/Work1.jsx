const Work1 = () => {
  return (
    <div className="flex flex-col bg-[#1c1e22] p-5 rounded-md drop-shadow-xl">
      <img
        src="/images/heal.png"
        alt="project"
        className="h-[200px] w-[350px] object-cover"
      />
      <p className="text-[#ec4899] font-semibold py-2">Heal Hub Center</p>
      <p className="text-[#a6aec2] pb-2">
        An e-commerce and booking website with user authentication, API
        consumption, payment gateway etc
      </p>
      <a
        href="https://github.com/Meerahbel/Healhubcenter"
        target="/"
        className="text-[#a6aec2] underline pb-5 hidden"
      >
        View code
      </a>

      <div className="flex gap-2">
        <div className="flex gap-2 w-fit p-2 bg-[#121418] rounded-lg items-center">
          <p className="text-[#a6aec2]">React.js</p>
          <img src="/images/react.png" alt="react icon" className="w-3 h-3" />
        </div>
        <div className="flex gap-2 w-fit p-2 bg-[#121418] rounded-lg items-center">
          <p className="text-[#a6aec2]">Tailwind</p>
          <img
            src="/images/tailwind.png"
            alt="react icon"
            className="w-3 h-3"
          />
        </div>
        <div className="flex gap-2 w-fit p-2 bg-[#121418] rounded-lg items-center">
          <p className="text-[#a6aec2]">Firebase</p>
          <img
            src="/images/firebase.png"
            alt="react icon"
            className="w-3 h-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Work1;
