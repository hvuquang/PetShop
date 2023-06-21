import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { bool } from "prop-types";
import dogimg from "../../images/golden.png"

export default function Card(props) {
  const cardtype = props.cardtype
  let link = "/"
  let petDescription = ""
  let linkimg = ""
  let cardTitle = ''
  let cardDescription = ''
  let food = props.foodI
  let price = 0
  let id = props.id

  function CardType() {
    if (props.cardtype === "pet") {
      link = "/petpage/" + id
    } else if (props.cardtype === "food") {
      link = "/foodpage/" + id
    }
  }

  CardType()
  setCard()

  function isUndefined() {
    if (props.petI === undefined) return true;
    return false;
  }

  function setCard() {
    if (props.cardtype === "food") {
      cardTitle = props.foodI !== undefined ? props.foodI.name : "Thức ăn chó mèo"
      price = props.foodI !== undefined ? props.foodI.foodData.price : "8000000"
      shortDescription(props.foodI)
    }
    else if (props.cardtype === "pet") {
      cardTitle = props.petI !== undefined ? props.petI.name : "Golden Treiver"
      price = props.petI !== undefined ? props.petI.petData.price : "8000000"
      shortDescription(props.petI)
    }
  }

  function shortDescription(item) {
    if (item === undefined) {
      cardDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,reprehenderit! Neque consequatur velit..."
      linkimg = dogimg;
      return
    }
    else {
      linkimg = "http://localhost:8000/" + item.image_url;
      linkimg = linkimg.slice(0,29) + "/" + linkimg.slice(30);
      if (item.description.length > 60) {
        cardDescription = item.description.slice(0, 60) + "...";
      } else {
        cardDescription = item.description;
      }
      if (item.name.length > 30) {
        cardTitle = item.name.slice(0,30) + "..."
      }
    }
  }

  return (
    <article
      class="card"
      style={{
        backgroundImage: `url(${linkimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div class="card__body">
        <h2 class="card__title">
          {cardTitle}
        </h2>
        <p>
          {cardDescription}
        </p>
        <p class="card__price">
          {price} VND
        </p>
        <Link params={{id: id}} to={link}>More info</Link> <p>➡️</p>
      </div>
    </article>
  );
}
