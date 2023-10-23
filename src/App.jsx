import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Gallery from "./Gallery.jsx";

const imgArr = [];

function App() {
  return (
    <div className="app">
      <header />
      <div className="imgContainer">
        {imgArr.map((e) => {
          return (
            <>
              <Gallery
                title={e.title}
                imgURL={e.image_URL}
                desc={e.description}
              />
            </>
          );
        })}
      </div>
      <footer />
    </div>
  );
}

export default App;