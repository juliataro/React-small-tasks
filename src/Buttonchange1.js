import React, { Component } from "react";
import Buttonchange2 from "./Buttonchange2";

export default class Buttonchange1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Button not pressed",
    };
    this.updateData = this.updateData.bind(this);
  }
  updateData = (value) => {
    this.setState({
      name: value,
    });
  };

  render() {
    return (
      <div>
        <p>State:{this.state.name}</p>
        <Buttonchange2 updateData={this.updateData} />
      </div>
    );
  }
}

