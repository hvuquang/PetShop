import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
import { bool } from "prop-types";

export default function Card(props) {
  const cardtype = props.cardtype
  let link = "/"

  function CardType() {
    if(props.cardtype === "pet") {
      link = "/petpage/petdetail"
    }
    else if (props.cardtype === "food") {
      link = "/foodpage/fooddetail"
    }
  }

  CardType()

  return (
    <article class="card">
      <div class="card__body">
        <h2 class="card__title">Golden Retriever</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          reprehenderit! Neque consequatur velit...
        </p>
        <p class="card__price">8.000.000 VND</p>
        {/* <a href="#">More info </a> */}
        <Link to={link} >More info</Link> <p>➡️</p>
      </div>
    </article>
  );
}
