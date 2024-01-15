import Aboutme from "../components/Aboutme";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Links from "../components/Links";
import Works from "../components/Works";

const Homepage = () => {
  return (
    <main className="bg-[#121418]">
      <Header />
      <Intro />
      <Links />
      <Aboutme />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
};

export default Homepage;
