import Aboutme from "../components/Aboutme";
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
    </main>
  );
};

export default Homepage;
