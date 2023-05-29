import React, { useState, useEffect } from "react";
import "./Home.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";
import CustomPopup from "../../components/popup/CustomPopup";
import AddPet from "../AddPetPage/AddPet";
import axios from "axios";

function Home() {
  const [modalState, setmodalState] = useState(false);
  const [petList, setPetList] = useState([]);
  const [img, setImg] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/v1/pet/readAllPet").then((res) => {
      setPetList(res.data);
    });
  }, []);
  function openModal() {
    setmodalState(!modalState);
  }

  const [pet, setPet] = useState({
    petBreed: "",
    petColor: "",
    petDescription: "",
    petHeight: "",
    petWeight: "",
    petImage: "",
    petOrigin: "",
    petCharacter: "",
    petAge: "",
    petPrice: "",
  });

  const updatePet = (e) => {
    const fieldName = e.target.name;
      setPet((existingValues) => ({
        ...existingValues,
        [fieldName]: e.target.value,
      }));
  };


  return (
    <div className="home-section">
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
        {petList.map((petItem, key) => {
          return <Card petI={petItem} cardtype="pet" key={key} />;
        })}
      </div>
      <AddPet
        pet={pet}
        toggle={modalState}
        action={openModal}
        addpet={updatePet}
      />
    </div>
  );
}

export default Home;
