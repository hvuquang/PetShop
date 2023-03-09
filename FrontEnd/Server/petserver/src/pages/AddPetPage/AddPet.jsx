import React, { useState } from 'react'
import './AddPet.css'

function AddPet() {

    // const [petBreed,setPetBreed] = useState('')
    // const [petColor,setPetColor] = useState('')
    // const [petDescription,setPetDescription] = useState('')
    // const [petHeight,setPetHeight] = useState('')
    // const [petWeight,setPetWeight] = useState('')
    // const [petImage, setPetImage] = useState('')
    // const [petOrigin, setPetOrigin] = useState('')
    // const [petCharacter, setPetCharacter] = useState('')

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
        petPrice: ""
    })

    const updatePet = e => {
        const fieldName = e.target.name
        setPet(existingValues => ({
            ...existingValues,
            [fieldName]: e.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Breed: ${pet.petBreed}, Description: ${pet.petDescription}, Age: ${pet.petAge}, Price: ${pet.petPrice}`)
    }
  return (
    <div id='addpet-section'>
        <h1>Thêm giống chó</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Ảnh:
            <input type="file" accept='image/*' name='petImage' value={pet.petImage} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Giống:
            <input type="text" name='petBreed' value={pet.petBreed} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Về giống:
            <input type="text" name='petDescription' value={pet.petDescription} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Màu:
            <input type="text" name='petColor' value={pet.petColor} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Tuổi thọ:
            <input type="text" name='petAge' value={pet.petAge} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Chiều cao:
            <input type="text" name='petHeight' value={pet.petHeight} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Cân nặng:
            <input type="text" name='petWeight' value={pet.petWeight} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Xuất xứ:
            <input type="text" name='petOrigin' value={pet.petOrigin} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Tính cách:
            <input type="text" name='petCharacter' value={pet.petCharacter} onChange={updatePet}></input>
        </label>
        <br />
        <label>
            Giá:
            <input type="text" name='petPrice' value={pet.petPrice} onChange={updatePet}></input>
        </label>
        <br />
        <button type='submit'>Thêm giống</button>
        </form>
    </div>
  )
}

export default AddPet