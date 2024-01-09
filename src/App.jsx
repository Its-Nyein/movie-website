import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "swiper/css";
import Header from "./pages/Header";
import Movie from "./pages/Movie";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Movie />
      <Main />
    </div>
  );
}

export default App;
