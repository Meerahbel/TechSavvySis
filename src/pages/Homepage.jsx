import Aboutme from "../components/Aboutme";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Links from "../components/Links";
import Works from "../components/Works";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  return (
    <>
      <main className="bg-[#121418]">
        <Header />
        <Intro />
        <Links />
        <Aboutme />
        <Works />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Homepage;
