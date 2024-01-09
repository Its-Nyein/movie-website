import React from "react";
import "./trailerModal.css";

function TrailerModal({ movie, status, toggleModal }) {
  return (
    <div className={`trailer-modal ${status ? "active" : undefined}`}>
      <a href="#" className="closeBtn" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default TrailerModal;
