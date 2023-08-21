import Footer from "./components/Home/Footer";
import HomeBody from "./components/Home/HomeBody";
import Navbar from "./components/Home/Navbar";
import Projects from "./components/Home/Projects";
import Skills from "./components/Home/Skills";
import Socials from "./components/Home/Socials";

export default function App() {
  return (
    <>
      <Navbar />
      <HomeBody />
      <Socials />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
