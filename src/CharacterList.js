import React from 'react';
import './App.css';
import './fonts/stylesheet.css';
import Character from './Character.js';

class CharacterList extends React.Component {
    render() {
        return (
            <section className="characters">
                {this.props.characters.map((character, index) => <Character name={character.name} key={index}/>)}
            </section>
        );
    }
}

export default CharacterList;