// rcc visivaem klassoviy komponenet

import React from "react";
import { Component } from "react";
import "./index.css";
import styled from "styled-components";

export default class GetRestapi extends Component {
  // rconst - snippet dlya sozdanija konstruksii
  constructor(props) {
    super(props);

    this.state = {
      // sostojanie komponenta
      error: null, // otslezivaem oshibki
      isLoaded: false,
      items: [], // nabor komponentov kotorie budem poluchat
    };
  }

  // Live cycle component, parem koht võrgutaotlusi teggemiseks
  // Kokteilide API https://www.thecocktaildb.com/api.php

  componentDidMount() {
    fetch(
      // xml http request taotlusi jaoks serveri juurde  !!!!! Aadress kirjutakse https:// -iga
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    )
      .then((res) => res.json()) // struktuur then resparametriga mis saab json data
      .then(
        (result) => {
          // parameetr
          this.setState({
            //vahetame seisund
            isLoaded: true,
            items: result.drinks, // drinks võttame ja saame  redigeerida JSON  siin https://jsonformatter.curiousconcept.com/#
          });
        },

        (error) => {
          // Errorite töödeldamine
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state; // loome constandid
    if (error) {
      return <p>Error {error.message}</p>; // Errori kuvamine
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      // Kui Errori pole siis väljastame järmine
      return (
        // map meetod võimaldab manipuleerida massiivi elementidega API'st
        <ul>
          {items.map((item) => (
            <li className="primary" key={item.name}>
              <img width="200" height="200" src={item.strDrinkThumb} />
              {item.strDrink}
            </li>
          ))}
        </ul>
      );
    }
  }
}
