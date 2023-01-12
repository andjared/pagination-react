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
    <div className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${image_id}/full/800,/0/default.jpg`}
        alt=""
      />
      <div className="info">
        <h3>{title}</h3>
        <h4>Artist: {artist_title}</h4>
        <p>Type: {artwork_type_title}</p>
        <p>Date Start: {date_start}</p>
        <p>Date End: {date_end}</p>
        <p>Place of origin: {place_of_origin}</p>
      </div>
    </div>
  );
};

export default Card;
