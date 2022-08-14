import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div className="click-section">
        <h3>Click Counter</h3>
        <p>Increment by 5</p>
        <button onClick={incrementCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
