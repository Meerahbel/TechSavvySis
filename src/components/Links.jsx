const Links = () => {
  return (
    <nav className="hidden lg:flex flex-col gap-10 fixed right-20 bottom-5 items-center">
      <a href="">
        <img
          src="/images/github.png"
          alt="github icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="">
        <img
          src="/images/twitter.png"
          alt="twitter icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="">
        <img
          src="/images/email.png"
          alt="email icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="">
        <img
          src="/images/linkedin.png"
          alt="linkedin icon"
          className="w-6 h-6 float-links"
        />
      </a>
      <a href="">
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
