import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incremntCounter = () => {
      this.setState((prevState) => {
        // return { count: prevState.count +  1}
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      //   console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          incremntCounter={this.incremntCounter}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
