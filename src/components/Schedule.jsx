import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "./Card";
import MovieData from "../../public/data/movieData.js";

function Schedule() {
  const filtersList = [
    {
      id: 1,
      name: "All",
      active: true,
    },

    {
      id: 2,
      name: "Action",
      active: false,
    },

    {
      id: 3,
      name: "Comedy",
      active: false,
    },

    {
      id: 4,
      name: "Thriller",
      active: false,
    },

    {
      id: 5,
      name: "Fantasy",
      active: false,
    },

    {
      id: 6,
      name: "Horror",
      active: false,
    },

    {
      id: 7,
      name: "Biography",
      active: false,
    },

    {
      id: 8,
      name: "Animation",
      active: false,
    },

    {
      id: 9,
      name: "Adventure",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filtersList);

  // const fetchMovie = () => {
  //   fetch("http://localhost:5173/data/movieData.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // };

  useEffect(() => {
    setData(MovieData);
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovies = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "All") {
      setMovies(data);
      return;
    }
    const filteredMovies = data.filter((movie) => movie.category === category);
    setMovies(filteredMovies);
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening This Week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter.id}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFilterMovies(filter.name);
                }}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
