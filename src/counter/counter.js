import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  handleButtonClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrementClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  }


  render() {
    const counter = this.state.counter;
    let color;
    const colorIncrement = { color: 'blue' };
    const colorDecrement = { color: 'red' };
    if (counter > 0) {
      color = colorIncrement;
    } else if (counter < 0) {
      color = colorDecrement;
    }

    return (
      <div>
        <h4 className='count' style={color}>{this.state.counter}</h4>
        <a href="#" onClick={this.handleButtonClick}>
          Going up
        </a>
        <a href="#" onClick={this.handleDecrementClick}>
          Going down
        </a>
      </div>
    );
  }
}

export default Counter;