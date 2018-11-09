import React, { Component } from 'react';
import Card from './Card.js'
import '../styles/PresidentList.css';

class PresidentList extends Component {
  render() {
    return (
      <div id="presidentlist-container">
        <Card president={this.props.president}/>
      </div>
    );
  }
}

export default PresidentList;
