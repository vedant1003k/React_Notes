import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Vedant</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome vedant</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>welCome Vedant</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcom Vedant</div>;
    // } else {
    //   return <div>Welcom Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcom Vedant</div>
    //     <div>Welcom Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
