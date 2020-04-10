import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Card = ({ back, flipped, front, handleClick, id }) => {
  return (
    <div
      className={`card ${flipped && "card--flipped"}`}
      onClick={() => handleClick(id)}
    >
      <div className="card__flipper">
        <img
          src={flipped ? front : back}
          alt="Card"
          className={`card__image ${
            flipped ? "card__image--front" : "card__image--back"
          }`}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  back: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  front: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
