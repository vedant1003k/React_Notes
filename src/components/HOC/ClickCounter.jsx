import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component {
  render() {
    // const
    const { count, incremntCounter } = this.props;

    return (
      <div>
        <button onClick={incremntCounter}>
          {this.props.name}
           CLICK {count} BUTTON
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter,10);
