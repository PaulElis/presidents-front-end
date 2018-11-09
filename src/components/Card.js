import React, { Component } from 'react';
import CardSection from './CardSection.js'
import '../styles/Card.css';

class Card extends Component {
  render() {
    return (
      <div id="card-container">
        <CardSection>
          <span>{this.props.president.President}</span>
        </CardSection>

        <CardSection>
          // {this.props.president.President}
        </CardSection>
      </div>
    );
  }
}

export default Card;
