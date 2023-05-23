import React, { useEffect, useState } from "react";
import "./Food.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";
import axios from "axios";

function Food() {
  const [foodList, setFoodList] = useState([]);

  

  useEffect(() => {
    axios.get("http://localhost:8000/v1/food/readAllFood").then((res) => {
      setFoodList(res.data)
      console.log(res.data)
    });
  });

  return (
    <div className="home-section">
      <div className="home-search">
        <input id="search-input" type="text" placeholder="Tìm kiếm ..." />
        <div id="home-btn">
          <p>Thêm</p>
          <img id="add-icon" src={addicon} alt="add pet icon" />
        </div>
      </div>
      <div id="home-container">
        {foodList.map((foodItem, key) => {
          return <Card cardtype="food" foodI = {foodItem} key={key}/>
        })}
      </div>
    </div>
  );
}

export default Food;
