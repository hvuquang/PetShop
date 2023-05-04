import React, { useState , useEffect } from "react";
import "./Home.css";
import addicon from "../../images/pet-icon.png";
import Card from "../../components/Card/Card";
import CustomPopup from "../../components/popup/CustomPopup";
import AddPet from "../AddPetPage/AddPet";
import axios from "axios"

function Home() {
  const [modalState, setmodalState] = useState(false)
  const [petList, setPetList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/v1/pet/readAllPet').then(res=>{
      console.log(res.data);
      setPetList(res.data);
    })
  },[])
  function openModal() {
    setmodalState(!modalState)
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

  const showPet = () => {
    console.log(
      `Breed: ${pet.petBreed}, Description: ${pet.petDescription}, Age: ${pet.petAge}, Price: ${pet.petPrice}`
    );
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
        {petList.map((petItem, key) => {
          return <Card petI={petItem} cardtype="pet" key={key}/>
        })}
        {/* <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/>
        <Card cardtype="pet"/> */}
      </div>
      <AddPet pet={pet} toggle={modalState} action={openModal} addpet={updatePet} showPet={showPet}/>
    </div>
  );
}

export default Home;
