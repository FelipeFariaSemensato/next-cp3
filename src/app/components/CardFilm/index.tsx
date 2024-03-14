import React from 'react';
import "./styles.css";

const CardFilm = ({ title, image, link }) => {
  return (
    <div className="card-film">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <div className="card-actions">
            <button>Assistir</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardFilm;