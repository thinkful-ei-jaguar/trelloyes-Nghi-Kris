import React from 'react';
import {createCard} from './card.js';

export function renderCard(props) {
    return (
       <section className = 'List'>
        <header>{props.header}</header>
        <div className = 'List-cards'>{props.cards.map(card => 
        createCard(card)
        )} </div>
        </section>
    );
}