import React from "react";

const Card = ({ item }) => {
  const {
    title,
    image_id,
    artist_title,
    artwork_type_title,
    date_start,
    date_end,
    place_of_origin,
  } = item;
  return (
    <li className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${image_id}/full/800,/0/default.jpg`}
        alt=""
      />
      <div className="info">
        <header>
          <h3>{title}</h3>
          <h4>Artist: {artist_title}</h4>
        </header>
        <p>
          <span className="data">Type: </span>
          {artwork_type_title}
        </p>
        <p>
          <span className="data">Date Start: </span>
          {date_start}
        </p>
        <p>
          <span className="data">Date End: </span>
          {date_end}
        </p>
        <p>
          <span className="data">Place of origin: </span>
          {place_of_origin}
        </p>
      </div>
    </li>
  );
};

export default Card;
