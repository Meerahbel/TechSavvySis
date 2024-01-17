import Links2 from "./Links2";

const Footer = () => {
  return (
    <footer className="flex flex-col pb-20 px-3 md:px-[60px] justify-center gap-10 bg-[#121418]">
      <Links2 />
      <div className="flex flex-col gap-2">
        <p className="text-[#a6aec2] text-center">
          Designed and built by Mirabel Ugoji.
        </p>
        <p className="text-[#a6aec2] text-center">© 2023.</p>
      </div>
    </footer>
  );
};

export default Footer;
