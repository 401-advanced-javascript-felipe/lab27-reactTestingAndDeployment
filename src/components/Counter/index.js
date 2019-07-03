import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  /**
 * Increments count
 *
 * @param {event} object
 */
  handleButtonClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  }

  /**
 * Decreases count
 *
 * @param {event} object
 */
  handleDecrementClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  }


  render() {
    const { counter } = this.state;
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
        <span className='increment' href="#" onClick={this.handleButtonClick}>
          Going up
        </span>
        <span className='decrement' href="#" onClick={this.handleDecrementClick}>
          Going down
        </span>
      </div>
    );
  }
}

export default Counter;
