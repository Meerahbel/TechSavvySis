import Aboutme from "../components/Aboutme";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Links from "../components/Links";

const Homepage = () => {
  return (
    <main className="bg-[#121418]">
      <Header />
      <Intro />
      <Links />
      <Aboutme />
    </main>
  );
};

export default Homepage;
