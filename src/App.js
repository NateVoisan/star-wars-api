import React from 'react';
import './App.css';
import './fonts/stylesheet.css';
import CharacterList from './CharacterList.js'

class App extends React.Component {
  state = {
    input: "",
    name: "",
    info: {
      results: []
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let endpoint = `https://swapi-thinkful.herokuapp.com/api/people/?search=${this.state.input}`
    fetch(endpoint)
      .then(response => response.json())
      .then(displayRes => this.setState({ info: displayRes }))
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    console.log(this.state.info);
    return (
      <main className='App'>
        <header>
          <h1>Star Wars Characters</h1>
        </header>
        <div className="form-container">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type='text'
              id='name'
              name='search'
              value={this.state.input}
              onChange={this.handleInput}
              placeholder='Skywalker'
            />
            <br />
            <button type="submit" className="submit-button" onSubmit={this.handleSubmit}>Search</button>
          </form>

          <div className="character-container">

            <CharacterList 
              characters={this.state.info.results}
            />

          </div>

        </div>
      </main>
    );
  }
}

export default App;
