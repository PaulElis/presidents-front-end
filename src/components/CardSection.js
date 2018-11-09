import React, { Component } from 'react';
import '../styles/CardSection.css';

class CardSection extends Component {
  render() {
    return (
      <div id="cardsection-container">
        {this.props.children}
      </div>
    );
  }
}

export default CardSection;
