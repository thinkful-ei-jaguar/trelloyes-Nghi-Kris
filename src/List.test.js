import React from 'react';
import reactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

// Props
// header = string
// cards = array of objects with id, title, and content

// Snapshot Test
it('List UI is consistent', () => {
    const deck = [{id:'1', title:'Ace', content:'Red Spade Ace'}, {id:'2', title:'Queen', content:'Black Heart Queen'}];
    const jsonFile = renderer.create(<List header="Deck of Cards" cards={deck} />).toJSON();
    expect(jsonFile).toMatchSnapshot();
})

// cards => array with object and each object has an id, title, and
// Smoke Test
it('Rendering List',() => {
    const div = document.createElement('div');
    reactDOM.render(<List />, div);
    reactDOM.unmountComponentAtNode();
})