import React, { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Board from './components/Board';

import initializeDeck from './utils/deck';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => setCards(initializeDeck()), [])

  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <Layout>
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </Layout>
  );
}

export default App;
