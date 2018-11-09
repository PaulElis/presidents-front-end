import React, { PureComponent } from 'react';
import CardSection from './CardSection.js'
import '../styles/Card.css';

class PresidentCard extends PureComponent {
  render() {
    return (
      <div id="card-container">
        <CardSection>
          <p id='president-name'>{this.props.president.President}</p>
        </CardSection>

        <CardSection>
          <span><span className='title'>Born:</span> {this.props.president.Birthday} </span>
          <span>in {this.props.president.Birthplace}</span>
        </CardSection>

        <CardSection>
          {this.props.president['Death day'] ?
          <div>
            <span><span className='title'>Died:</span> {this.props.president['Death day']} </span>
            <span>in {this.props.president['Death place']}</span>
          </div> : null }
        </CardSection>
      </div>
    );
  }
}

export default PresidentCard;
