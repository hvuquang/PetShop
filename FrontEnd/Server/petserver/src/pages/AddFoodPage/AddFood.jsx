import React, { useState } from 'react'
import './AddFood.css'

function AddFood() {

    const [foodName,setFoodName] = useState('')
    const [foodSize,setFoodSize] = useState('')
    const [foodDescription,setFoodDescription] = useState('')
    const [foodFlavour,setFoodFlavour] = useState('')
    const [foodPrice,setFoodPrice] = useState('')
    const [foodImage, setFoodImage] = useState('')

    const [food,setFood] = useState({
        foodName: '',
        foodSize: '',
        foodDescription: '',
        foodFlavour: '',
        foodPrice: '',
        foodImage: ''
    })

    const updateFood = e => {
        const fieldName = e.target.name
        setFood(existingValue => ({
            ...existingValue,
            [fieldName]: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Name: ${food.foodName}, Description: ${food.foodDescription}, Size: ${food.foodSize}, Flavour: ${food.foodFlavour}, Price: ${food.foodPrice}`)
    }
  return (
    <div id='addfood-section'>
        <h1>Thêm món ăn</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Tên món ăn:
            <input type="text" name='foodName' value={food.foodName} onChange={updateFood}></input>
        </label>
        <br />
        <label>
            Mô tả món ăn:
            <input type="text" name='foodDescription' value={food.foodDescription} onChange={updateFood}></input>
        </label>
        <br />
        <label>
            Ảnh món ăn:
            <input type="text" value={food.foodImageư} onChange={updateFood}></input>
        </label>
        <br />
        <label>
            Kích cỡ món ăn:
            <input type="text" name='foodSize' value={food.foodSize} onChange={updateFood}></input>
        </label>
        <br />
        <label>
            Hương vị món ăn:
            <input type="text" name='foodFlavour' value={food.foodFlavour} onChange={updateFood}></input>
        </label>
        <br />
        <label>
            Giá món ăn:
            <input type="text" name='foodPrice' value={food.foodPrice} onChange={updateFood}></input>
        </label>
        <br />
        <button type='submit'>Thêm món</button>
        </form>
    </div>
  )
}

export default AddFood