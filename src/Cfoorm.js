import React, { Component } from "react";
// button import in the end of page for every element on material ui
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

export default class Cfoorm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault(); //predotvrashaet obnovlenie stranisi
    this.setState({
      input: this.state.input,
      items: [...this.state.items, this.state.input],
    });
  }

  render() {
    return (
      <div>
        <h1 className="hello">Hello world!</h1>

        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            style={{ marginRight: 15, marginBottom: 15 }}
            href="#"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            style={{ marginRight: 15, marginBottom: 15 }}
            variant="contained"
            color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
