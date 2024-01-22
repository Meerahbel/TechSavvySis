const Links = () => {
  return (
    <nav className="hidden lg:flex flex-col gap-10 fixed right-0 xl:right-3 bottom-5 items-center">
      <a href="https://github.com/Meerahbel" target="/">
        <img
          src="/images/github.png"
          alt="github icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="https://twitter.com/TechSavvySis" target="/">
        <img
          src="/images/twitter.png"
          alt="twitter icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="mailto:mirabelugoji@gmail.com">
        <img
          src="/images/email.png"
          alt="email icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="https://www.linkedin.com/in/mirabel-ugoji-47b873251/" target="/">
        <img
          src="/images/linkedin.png"
          alt="linkedin icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="https://wa.me/+2349021384077" target="/">
        <img
          src="/images/whatsapp.png"
          alt="whatsapp icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <img src="/images/vertical-line.png" alt="vertical line" />
    </nav>
  );
};

export default Links;
