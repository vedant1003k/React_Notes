import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus()
    console.log(this.myRef);
  }

  clickHandler=()=>{
    alert(this.myRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
