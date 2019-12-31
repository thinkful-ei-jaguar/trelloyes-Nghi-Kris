import React from 'react';
import reactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

// Snapshot Test
it('Renders Card UI', () => {
    const jsonFile = renderer.create(<Card title='cardA' content='stuff'/>).toJSON();
    expect(jsonFile).toMatchSnapshot();
})

// Smoke Test
it('Card is rendering',() => {
    const div = document.createElement('div');
    reactDOM.render(<Card />, div);
    // Clean up
    reactDOM.unmountComponentAtNode(div);
})