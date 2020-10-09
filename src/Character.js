import React from 'react';
import './App.css';
import './fonts/stylesheet.css';

class Character extends React.Component {
    render() {
        return (
            <section className="character">
                <h2>{this.props.name}</h2>
            </section>
        );
    }
}

export default Character;