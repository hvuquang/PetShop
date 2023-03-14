import React from "react";
import "./Card.css"

export default function Card() {
  return (
    <article class="card">
      <div class="card__body">
        <h2 class="card__title">Golden Retriever</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          reprehenderit! Neque consequatur velit...
        </p>
        <p class="card__price">8.000.000 VND</p>
        <a href="#">More info </a> <p>➡️</p>
      </div>
    </article>
  );
}