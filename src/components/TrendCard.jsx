import React from "react";
import "./trendCard.css";

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
      <img
        src={`https://image.tmdb.org/t/p/w1280${slide.poster_path}`}
        className="img-fluid"
      />
      <a href="#">
        Add to a calendar <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );
}

export default TrendCard;
