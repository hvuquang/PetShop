import React from "react";
import "./Food.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";

function Food() {
  return (
    <div className="home-section">
      <div className = "home-search">
        <input id="search-input" type="text" placeholder="Tìm kiếm ..." />
        <div id="home-btn">
          <p>Thêm</p>
          <img id="add-icon" src={addicon} alt="add pet icon" />
        </div>
      </div>
      <div id="home-container">
          <Card cardtype="food"/>
          <Card cardtype="food"/>
          <Card cardtype="food"/>
          <Card cardtype="food"/>
      </div>
    </div>
  );
}

export default Food;
