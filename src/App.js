import React from 'react';
import {renderCard} from './list.js';
import './App.css';

function App(store) {
  const cardDetails = renderCard(store);
  
  
  return (
    <main>
    <header><h1>{store.header}</h1></header>
    <div className='App-list'>{cardDetails}</div>
    </main>
  );
}

export default App;
