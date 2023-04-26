import React, { useState } from "react";
import "./AddPet.css";

function AddPet(props) {
  // const [petBreed,setPetBreed] = useState('')
  // const [petColor,setPetColor] = useState('')
  // const [petDescription,setPetDescription] = useState('')
  // const [petHeight,setPetHeight] = useState('')
  // const [petWeight,setPetWeight] = useState('')
  // const [petImage, setPetImage] = useState('')
  // const [petOrigin, setPetOrigin] = useState('')
  // const [petCharacter, setPetCharacter] = useState('')

  const modalState = props.toggle;
  const action = props.action;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Breed: ${pet.petBreed}, Description: ${pet.petDescription}, Age: ${pet.petAge}, Price: ${pet.petPrice}`
    );
  };
  return (
    <div className={`bg-modal ${modalState ? "modal-active" : ""}`}>
      <div id="addpet-section">
        <h1>Thêm</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Ảnh:
            <input
              type="file"
              accept="image/*"
              name="petImage"
              value={pet.petImage}
              onChange={updatePet}
            ></input>
          </div>
          <div className="addpet-title">
            <p className="title">Giống</p>
            <input
              type="text"
              name="petBreed"
              value={pet.petBreed}
              onChange={updatePet}
              className="addpet-input"
            ></input>
          </div>
          <div className="addpet-title">
            Về giống:
            <input
              type="text"
              name="petDescription"
              value={pet.petDescription}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Màu:
            <input
              type="text"
              name="petColor"
              value={pet.petColor}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Tuổi thọ:
            <input
              type="text"
              name="petAge"
              value={pet.petAge}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Chiều cao:
            <input
              type="text"
              name="petHeight"
              value={pet.petHeight}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Cân nặng:
            <input
              type="text"
              name="petWeight"
              value={pet.petWeight}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Xuất xứ:
            <input
              type="text"
              name="petOrigin"
              value={pet.petOrigin}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Tính cách:
            <input
              type="text"
              name="petCharacter"
              value={pet.petCharacter}
              onChange={updatePet}
            ></input>
          </div>
          <div>
            Giá:
            <input
              type="text"
              name="petPrice"
              value={pet.petPrice}
              onChange={updatePet}
            ></input>
          </div>
          <button type="submit">Thêm giống</button>
          <button onClick={action}>Thoát</button>
        </form>
      </div>
    </div>
  );
}

export default AddPet;
