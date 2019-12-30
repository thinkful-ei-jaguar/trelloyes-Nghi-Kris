import React, {Component} from 'react';
import {renderCard} from './list.js';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render(store) {  
    return (
      <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes</h1>
      </header>
      <div className='App-list'>
      {store.lists.map(list => 
        <renderCard 
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id => store.allCards[id])}
        />)
      }</div>
      </main>
    );
  }
}

export default App;

