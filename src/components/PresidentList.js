import React, { Component } from 'react';
import '../styles/PresidentList.css';

class PresidentList extends Component {
  render() {
    return (
      <div id="presidentcard-container">
        <p>{this.props.president.President}</p>
      </div>
    );
  }
}

export default PresidentList;
