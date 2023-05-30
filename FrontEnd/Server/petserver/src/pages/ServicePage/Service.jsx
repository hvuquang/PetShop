import React from "react";
import "./Service.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AddService from "../AddService/AddService";

function Service() {
  return (
    <div className="home-section">
      <div className = "home-search">
        <input id="search-input" type="text" placeholder="Tìm kiếm ..." />
        <div id="home-btn">
          <p>Thêm</p>
          <img id="add-icon" src={addicon} alt="add pet icon" />
        </div>
        <AddService />
      </div>
      <div id="home-container">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
      </div>
    </div>
  );
}

export default Service;
