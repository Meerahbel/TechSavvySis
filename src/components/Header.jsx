import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="flex py-4 px-3 md:px-[60px] justify-between items-center bg-transparent fixed z-[999] top-0 left-0 right-0">
      <div className="flex gap-3 items-center">
        <img src="/images/icon2.png" alt="icon" className="w-5 h-5" />
        <p className="text-[#ec4899] tracking-widest">TECHSAVVYSIS</p>
      </div>
      <ul className="hidden md:flex md:gap-10 lg:gap-20">
        <li className="text-[#a6aec2]">
          <span className="text-[#ec4899]">01.</span> About me
        </li>
        <li className="text-[#a6aec2]">
          <span className="text-[#ec4899]">02.</span> Works
        </li>
        <li className="text-[#a6aec2]">
          <span className="text-[#ec4899]">03.</span> Contact
        </li>
        <li className="text-[#a6aec2]">
          <span className="text-[#ec4899]">04.</span> Resume
        </li>
      </ul>
      <div onClick={handleMenu} className="block md:hidden">
        <img src="/images/menu.png" alt="menu" className="w-6 h-6" />
      </div>

      {dropdown && (
        <ul className="w-full absolute z-10 top-[50px] left-0 flex flex-col items-center bg-[#121418] gap-10 py-10 text-2xl md:hidden slide-right">
          <li className="text-[#a6aec2] border-b border-white/5 pb-5 w-full text-center">
            <span className="text-[#ec4899]">01.</span> About me
          </li>
          <li className="text-[#a6aec2] border-b border-white/5 pb-5 w-full text-center">
            <span className="text-[#ec4899]">02.</span> Works
          </li>
          <li className="text-[#a6aec2] border-b border-white/5 pb-5 w-full text-center">
            <span className="text-[#ec4899]">03.</span> Contact
          </li>
          <li className="text-[#a6aec2] pb-5 w-full text-center">
            <span className="text-[#ec4899]">04.</span> Resume
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
