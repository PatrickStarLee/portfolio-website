import Navabar from "./components/Navabar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navabar />
      <Home />
      <About />
      <Skills />
      <div className="">
        <Work />
      </div>
      <Contact />
    </div>
  );
}

export default App;
