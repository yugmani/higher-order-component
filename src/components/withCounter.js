import React from 'react';

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
          // {/* props name is passed to HOC but not to wrapped components. So it also needs to be passed down from HoC to wrapped components as props */}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
