import React, { Component } from 'react';
import '../styles/Buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div id="buttons-container">
        <button type="button">Ascending</button>
        <button type="button">Descending</button>
      </div>
    );
  }
}

export default Buttons;
