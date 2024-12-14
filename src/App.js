import logo from "./logo.svg";
import "./style/style.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Highlight from "./Component/Highlight";
import MainSection from "./Component/MainSection";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Services from "./Component/Services";
import Testimonials from "./Component/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Highlight />
      <Footer />
    </>
  );
}

export default App;
