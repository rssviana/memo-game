import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import './board.css';

const Board = ({ cards, flipped, handleClick }) => {
  return (
    <div className="board">
      { cards.map(card =>
        <Card 
          key={card.id}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
          id={card.id}
          type={card.type}
        />
      )}
    </div>
  )
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Board;