import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounter extends Component {
  render() {
    // const
    const { count, incremntCounter } = this.props;

    return (
      <div>
        <button onMouseOver={incremntCounter}>
          {this.props.name}
          Hover {count} Times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter,2);
