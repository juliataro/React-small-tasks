// rcc klassoviy komponent

import React, { Component } from "react";

export default class Ccomponent extends Component {
  // Создаем конструктор для определения обьекта state над рендером rconst

  constructor(props) {
    super(props); // metod vizivaet roditelskiy konstruktor

    this.state = {
      // komponent inisializasija sostojanija
      // name: "Alex"
      //visibility: false //znachenie false
      count: 0,
    };

    // posle steita Нужно прикрепить ссылку на наш метод
    // this.handleClick = this.handleClick.bind(this);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // JS предоставляет metod dlz obnovlenija komponenta, nuöno vizvat etot metod peredavaja
  // peredavaja paru - kluch i znachenie
  handleClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  // Eto metodi na kazduju knopku

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    /*
        po kliku ischezaet slovo, po kliku pojavlaetsa

        // poske rendera sozdajem uslovija 
        if(this.state.visibility){
            return (
                <div>
                    <h1>Now u see me</h1> 
                    <button onClick={this.handleClick}>Click</button>                   
                </div>
            );
        }
        else{
            return(
                <div>
                    <button onClick={this.handleClick}>Click</button>
              
                </div>
            )  
        } 
        */

    return (
      <div>
        <button onClick={this.increment}>incement</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
        <h1>Current: {this.state.count}</h1>
      </div>
    );
  }
}
