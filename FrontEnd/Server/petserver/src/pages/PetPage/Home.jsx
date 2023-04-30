import React, { useState } from "react";
import "./Home.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";
import CustomPopup from "../../components/popup/CustomPopup";
import AddPet from "../AddPetPage/AddPet";

function Home() {
  const [modalState, setmodalState] = useState(false)

  function openModal() {
    setmodalState(!modalState)
  }
  return (
    <div className="home-section">
      {/* {modalState.toString()} */}
      <div className="home-search">
        <input id="search-input" type="text" placeholder="Tìm kiếm ..." />
        <div id="home-btn">
          <p id="add-btn" onClick={openModal}>
            Thêm
          </p>
          <img id="add-icon" src={addicon} alt="add pet icon" />
        </div>
      </div>
      <div id="home-container">
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
      </div>
      <AddPet toggle={modalState} action={openModal}/>
    </div>
  );
}

export default Home;
