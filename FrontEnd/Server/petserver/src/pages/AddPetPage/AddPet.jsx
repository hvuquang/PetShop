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
          <div className="form-section">
            <div>
              <div className="addpet-title">
                Giống:
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
                  className="addpet-input about-input"
                  multiple
                ></input>
              </div>
              <div className="addpet-title">
                Màu:
                <input
                  type="text"
                  name="petColor"
                  value={pet.petColor}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
              <div className="addpet-title">
                Tuổi thọ:
                <input
                  type="text"
                  name="petAge"
                  value={pet.petAge}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
              <div className="addpet-title">
                Chiều cao:
                <input
                  type="text"
                  name="petHeight"
                  value={pet.petHeight}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
              <div className="addpet-title">
                Cân nặng:
                <input
                  type="text"
                  name="petWeight"
                  value={pet.petWeight}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
            </div>
            <div>
              <div className="addpet-title">
                Ảnh
                <br />
                <input
                  type="file"
                  accept="image/*"
                  name="petImage"
                  value={pet.petImage}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
              <div className="addpet-title">
                Xuất xứ:
                <input
                  type="text"
                  name="petOrigin"
                  value={pet.petOrigin}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
              <div className="addpet-title">
                Tính cách:
                <input
                  type="text"
                  name="petCharacter"
                  value={pet.petCharacter}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
              <div className="addpet-title">
                Giá:
                <input
                  type="text"
                  name="petPrice"
                  value={pet.petPrice}
                  onChange={updatePet}
                  className="addpet-input"
                ></input>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <button className="form-add-btn" type="submit">
              Thêm giống
            </button>
            <button className="form-exit-btn" onClick={action}>
              Thoát
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPet;
