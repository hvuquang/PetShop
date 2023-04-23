import React from "react";
import "./Food.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";

function Food() {
  return (
    <div id="home-section">
      <div id="home-search">
        <input id="search-input" type="text" placeholder="Tìm kiếm ..." />
        <div id="home-btn">
          <p>Thêm</p>
          <img id="add-icon" src={addicon} alt="add pet icon" />
        </div>
      </div>
      <div id="home-container">
          <Card />
          <Card />
      </div>
    </div>
  );
}

export default Food;
