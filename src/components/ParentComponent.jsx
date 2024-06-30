import React, { Component } from "react";
import ChildCompent from "./ChildCompent.jsx";
// ChildCompent

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      par: "Parent",
    }
    this.greetPa = this.greetPa.bind(this)
  }

  greetPa(childname) {
    alert(`Hellp ${this.state.par} from ${childname}`);
  }

  render() {
    return (
      <div>
        <ChildCompent greethandle={this.greetPa} />
      </div>
    );
  }
}

export default ParentComponent;
