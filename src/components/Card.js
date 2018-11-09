import React, { Component } from 'react';
import CardSection from './CardSection.js'
import '../styles/Card.css';

class Card extends Component {
  render() {
    console.log(this.props.president);
    return (
      <div id="card-container">
        <CardSection>
          <p id='president-name'>{this.props.president.President}</p>
        </CardSection>

        <CardSection>
          <span>Born: {this.props.president.Birthday} </span>
          <span>in {this.props.president.Birthplace}</span>
        </CardSection>

        <CardSection>
          {this.props.president['Death day'] ?
          <div>
            <span>Died: {this.props.president['Death day']} </span>
            <span>in {this.props.president['Death place']}</span>
          </div> : null }
        </CardSection>
      </div>
    );
  }
}

export default Card;
