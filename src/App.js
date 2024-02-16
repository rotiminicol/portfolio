import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Skill from "./Component/Skill/Skill";
import Works from "./Component/Works/Works";


function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro/>
    <Skill />
    <Works/>
    <Contact />
    <Footer/>
    </div>
  );
}

export default App;
