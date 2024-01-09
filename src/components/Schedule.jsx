import React, { useState, useEffect } from "react";
import "./schedule.css";

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchMovie = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    setMovies(data);
  });

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening This Week</h4>
        </div>
        <div className="row">
          <div className="fiters">
            <p>Filters</p>
          </div>
        </div>
        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              <h1 key={movie.id}>{movie.original_title}</h1>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
