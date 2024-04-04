
import "./App.css";
import Contact from "./Components/Contact";
import Divider from "./Components/Divider";
import Feature from "./Components/Feature";
import MainSection from "./Components/MainSection";
import Skills from "./Components/Skills";
import Welcome from "./Components/Welcome";
import Services from "./Components/Services";
import Client from "./Components/Client";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <MainSection/>
    <Welcome/>
    <Skills/>
    <Divider/>
    <Feature/>
    <Contact/>
    <Services/>
    <Client/>
    <Portfolio/>
    <Testimonials/>
    <Blog/>
    <Form/>
    <Footer/>
    </>
  );
}

export default App;
