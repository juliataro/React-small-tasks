import React, { Component } from "react";
import Fcomp from "./Fcomp";
import Fncomp from "./Fncomp";

import Fcomponent from "./Fcomponent";

export default class Ccomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Fcomp input={this.state.inputValue} handleChange={this.handleChange} />
        <Fncomp input={this.state.inputValue} />
      </div>
    );
  }
}
