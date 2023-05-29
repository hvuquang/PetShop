import React, { useState } from "react";
import "./AddPet.css";
import axios from "axios";

function AddPet(props) {
  // const [petBreed,setPetBreed] = useState('')
  // const [petColor,setPetColor] = useState('')
  // const [petDescription,setPetDescription] = useState('')
  // const [petHeight,setPetHeight] = useState('')
  // const [petWeight,setPetWeight] = useState('')
  const [img, setImg] = useState()
  // const [petOrigin, setPetOrigin] = useState('')
  // const [petCharacter, setPetCharacter] = useState('')

  const modalState = props.toggle;
  const action = props.action;
  let pet = props.pet;
  let updatePet = props.addpet;
  const showPet = props.showPet;

  const url = "http://localhost:8000/v1/pet/add";

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   `Breed: ${pet.petBreed}, Description: ${pet.petDescription}, Age: ${pet.petAge}, Price: ${pet.petPrice}`
    // );
    const formD = new FormData();
    formD.append("name", pet.petBreed)
    formD.append("breed", pet.petBreed)
    formD.append("description", pet.petDescription)
    formD.append("product_type", 'Pet')
    formD.append("price", pet.petPrice)
    formD.append("gender", 'Duc')
    formD.append("age", pet.petAge)
    formD.append("image_url", img)
    axios.post(url, formD).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const onSelectedFile = (e) => {
    setImg(e.target.files[0])
    console.log(e.target.files[0])
    console.log(img)
}
  
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
                  // value={img}
                  onChange={onSelectedFile}
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
            <button className="form-add-btn" type="submit" onClick={showPet}>
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
