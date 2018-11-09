import React, { PureComponent } from 'react';
import PresidentCard from './PresidentCard.js'
import '../styles/PresidentList.css';

class PresidentList extends PureComponent {
  render() {
    return (
      <div id="presidentlist-container">
        <PresidentCard president={this.props.president}/>
      </div>
    );
  }
}

export default PresidentList;
