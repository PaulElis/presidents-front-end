import React, { Component } from 'react';
import PresidentList from './components/PresidentList.js'
import './App.css';

class App extends Component {

  state: {
    presidents: [],
  }

  sortingFunction = (SORT) => {
    // const url = new URL(`http://localhost:3000/presidents`);
    const url = new URL(`https://presidents-back-end.herokuapp.com/presidents`);
      url.searchParams.append('sort', SORT);
        fetch(url)
          .then(response => response.json())
            .then(presidents => this.setState({
                presidents: presidents
              })
            )
  }

  ascending = () => {
    this.sortingFunction('asc')
  }

  descending = () => {
    this.sortingFunction('desc')
  }

  renderPresidents = () => {
    return this.state.presidents.map(president =>
      <PresidentList president={president} key={president.President}/>
    )
  }

  render() {
    return (
      <div className="App">
        <header />
        <button className='sort-button' onClick={this.ascending}>Ascending</button>
        <button className='sort-button' onClick={this.descending}>Descending</button>
        {this.state ? this.renderPresidents() : null}
      </div>
    );
  }
}

export default App;
