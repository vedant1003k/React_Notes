import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  handleUsernamehange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlecommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handletopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Form Compnent */}
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernamehange}
          />
        </div>
        <div>
          <label htmlFor="">Text</label>
          <textarea
            name=""
            id=""
            value={this.state.comment}
            onChange={this.handlecommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select
            name=""
            id=""
            value={this.state.topic}
            onChange={this.handletopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
