import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div className="hover-section">
        <h3>Hover Counter</h3>
        <p>Increment by 10</p>
        <h4 onMouseOver={incrementCount}>Hovered {count} times</h4>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 10);
