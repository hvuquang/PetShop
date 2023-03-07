import React, { useState } from 'react'
import './Food.css'

function Food() {

    const [foodName,setFoodName] = useState('')
    const [foodSize,setFoodSize] = useState('')
    const [foodDescription,setFoodDescription] = useState('')
    const [foodFlavour,setFoodFlavour] = useState('')
    const [foodPrice,setFoodPrice] = useState('')
    const [foodImage, setFoodImage] = useState('')

    const handleFoodNameChange = (event) => {
        setFoodName(event.target.value)
    }
    const handleFoodSizeChange = (event) => {
        setFoodSize(event.target.value)
    }
    const handleFoodDescriptionChange = (event) => {
        setFoodDescription(event.target.value)
    }
    const handleFoodFlavourChange = (event) => {
        setFoodFlavour(event.target.value)
    }
    const handleFoodPriceChange = (event) => {
        setFoodPrice(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Name: ${foodName}, Description: ${foodDescription}, Size: ${foodSize}, Flavour: ${foodFlavour}, Price: ${foodPrice}`)
    }
  return (
    <div id='addfood-section'>
        <h1>Thêm món ăn</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Tên món ăn:
            <input type="text" value={foodName} onChange={handleFoodNameChange}></input>
        </label>
        <br />
        <label>
            Mô tả món ăn:
            <input type="text" value={foodDescription} onChange={handleFoodDescriptionChange}></input>
        </label>
        <br />
        <label>
            Ảnh món ăn:
            <input type="text"></input>
        </label>
        <br />
        <label>
            Kích cỡ món ăn:
            <input type="text" value={foodSize} onChange={handleFoodSizeChange}></input>
        </label>
        <br />
        <label>
            Hương vị món ăn:
            <input type="text" value={foodFlavour} onChange={handleFoodFlavourChange}></input>
        </label>
        <br />
        <label>
            Giá món ăn:
            <input type="text" value={foodPrice} onChange={handleFoodPriceChange}></input>
        </label>
        <br />
        <button type='submit'>Thêm món</button>
        </form>
    </div>
  )
}

export default Food