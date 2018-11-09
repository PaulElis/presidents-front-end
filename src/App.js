import React, { Component } from 'react';
import PresidentList from './components/PresidentList.js'
import './App.css';

class App extends Component {

  state: {
    presidents: [],
  }

  componentDidMount = () => {
    this.sortingFunction('asc')
  }

  sortingFunction = (SORT) => {
    const url = new URL(`http://localhost:3000/presidents`);
      url.searchParams.append('sort', SORT);
        fetch(url)
          .then(response => response.json())
            .then(presidents => this.setState({
                presidents: presidents
              })
            )
  }

  renderPresidents = () => {
    return this.state.presidents.map(president =>
      <PresidentList president={president} />
    )
  }

  render() {
    // console.log('Presidents:', this.state);
    return (
      <div className="App">
        <header />
          {this.state ? this.renderPresidents() : null}
      </div>
    );
  }
}

export default App;
