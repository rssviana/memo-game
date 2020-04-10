import React, { useState } from 'react';

import Layout from './components/Layout';
import Card from './components/Card';

import frontIMG from './statics/images/card-front.png';
import backIMG from './statics/images/card-back.png';

const App = () => {

  const [flipped, setFlipped] = useState([]);

  const handleClick = id => setFlipped([...flipped, id]);

  return (
    <Layout>
      <Card 
        back={backIMG}
        flipped={flipped.includes(1)}
        front={frontIMG}
        handleClick={() => handleClick(1)}
        id={1}
      />
    </Layout>
  );
}

export default App;
