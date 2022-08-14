import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <h3>Click Counter</h3>
        <button onClick={incrementCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
