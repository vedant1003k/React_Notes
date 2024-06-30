import  { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "I am Vedant",
    };
  }

  changeMessage() {
    this.setState({
      message: "I have got air 1 in gate 2025",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Action</button>
      </div>
    );
  }
}

export default Message;
