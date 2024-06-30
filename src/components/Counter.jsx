import  { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <div>count {this.state.count}</div>
        <button onClick={() => this.increaseCount()}>INC</button>
        <button onClick={() => this.decrementCount()}>DEC</button>
      </div>
    );
  }
}

export default Counter;
