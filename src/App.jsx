import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "swiper/css";
import Header from "./pages/Header";
import Movie from "./pages/Movie";
import Main from "./components/Main";
import BackToTopBtn from "./components/BackToTopBtn";
import React, { useEffect, useState } from "react";

function App() {
  // scroll position of window
  const [scroll, setScroll] = useState(0);

  // constantly listen to the scroll pos
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <div>
      <Header scroll={scroll} />
      <Movie />
      <Main />
      <BackToTopBtn scroll={scroll} />
    </div>
  );
}

export default App;
