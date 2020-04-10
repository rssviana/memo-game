import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Card = ({ flipped, handleClick, id, type }) => {
  return (
    <div
      className={`card ${flipped && "card--flipped"}`}
      onClick={() => handleClick(id)}
    >
      <div className="card__flipper">
        <img
          src={flipped 
            ? `./statics/images/card-${type}.png` 
            : './statics/images/card-back.png'}
          alt="Card"
          className={`card__image 
          ${
            flipped ? "card__image--front" : "card__image--back"
          }`}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  flipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;
