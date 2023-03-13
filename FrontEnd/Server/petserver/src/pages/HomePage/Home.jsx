import React from "react";
import "./Home.css";
import addicon from "../../images/pet-icon.png";

function Home() {
  return (
    <div id="home-section">
      <div id="home-search">
        <input id="search-input" type="text" placeholder="Tìm kiếm ..." />
        <div id="home-btn">
          <p>Thêm</p>
          <img id="add-icon" src={addicon} alt="add pet icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
