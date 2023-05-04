import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { bool } from "prop-types";
import dogimg from "../../images/golden.png"

export default function Card(props) {
  const cardtype = props.cardtype;
  console.log(props.petI);
  let link = "/";
  let petDescription = "";
  let linkimg = "";

  function CardType() {
    if (props.cardtype === "pet") {
      link = "/petpage/petdetail";
    } else if (props.cardtype === "food") {
      link = "/foodpage/fooddetail";
    }
  }

  CardType();
  shortDescription();

  function isUndefined() {
    if (props.petI === undefined) return true;
    return false;
  }

  function shortDescription() {
    if (props.petI === undefined) {
      linkimg = dogimg;
      return
    }
    else {
      linkimg = "http://localhost:8000/" + props.petI.image_url;
      linkimg = linkimg.slice(0,29) + "/" + linkimg.slice(30);
      if (props.petI.description.length > 60) {
        petDescription = props.petI.description.slice(0, 60) + "...";
      } else {
        petDescription = props.petI.description;
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
          {props.petI !== undefined ? props.petI.name : "Golden Treiver"}
        </h2>
        <p>
          {props.petI !== undefined
            ? petDescription
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,reprehenderit! Neque consequatur velit..."}
        </p>
        <p class="card__price">
          {props.petI !== undefined ? props.petI.petData.price : "8000000"} VND
        </p>
        {/* <a href="#">More info </a> */}
        <Link to={link}>More info</Link> <p>➡️</p>
      </div>
    </article>
  );
}
