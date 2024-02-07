import React from "react";
import "./movie.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";
import MovieData from "../../public/data/movieData.js";

function Movie() {
  const [movies, setmovies] = React.useState([]);

  // const fetchMovie = () => {
  //   fetch("http://localhost:5173/data/movieData.json")
  //     .then((res) => res.json())
  //     .then((data) => setmovies(data));
  // };

  React.useEffect(() => {
    setmovies(MovieData);
  }, []);

  const handleChange = (id) => {
    const newMovie = movies.map((movie) => {
      movie.active = false;
      if (movie.id === id) {
        movie.active = true;
      }
      return movie;
    });
    setmovies(newMovie);
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.bg_Img}`}
              className={`bg-Img ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}
      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleChange} />
      )}
    </div>
  );
}

export default Movie;
