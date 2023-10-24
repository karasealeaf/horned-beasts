import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import beastArr from "./data.json";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header className="Header"/>
      <Gallery beasts={beastArr} />
      <Footer className="Footer"/>
    </>
  );
}

export default App;
