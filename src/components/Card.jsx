import React from "react";
import PropTypes from "prop-types";
function Card({ name, info, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{info}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
