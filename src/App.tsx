import "./styles/App.css";
import Navbar from "./components/NavBar";
import Bio from "./components/Bio";
import Comp from "./components/comp";
import Footer from "./components/Footer";
import Expe from "./components/expe";
import Contacts from "./components/contact"
import "./assets/linkedin.png"
import "./assets/pngegg.png"

function App() {

  return (
    <>
      <Navbar />
      <div className="titre">
        <h1>Malaury Nezan | Transformez vos idées en expériences visuelles</h1>
        <h4>Donnons vie à vos projets ensemble</h4>
      </div>
      <Bio/>
      <Comp/>
      <Expe/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
