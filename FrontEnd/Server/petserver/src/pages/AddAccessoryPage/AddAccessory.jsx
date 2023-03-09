import React, { useState } from 'react'
import './AddAccessory.css'

function AddAccessory() {

    const [accessory,setAccessory] = useState({
        accessoryName: '',
        accessoryDescription: '',
        accessoryPrice: '',
        accessoryImage: ''
    })

    const updateAccessory = e => {
        const fieldName = e.target.name
        setAccessory(existingValue => ({
            ...existingValue,
            [fieldName]: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Name: ${accessory.accessoryName}, Description: ${accessory.accessoryDescription}, Image: ${accessory.accessoryImage}, Price: ${accessory.accessoryPrice}`)
    }
  return (
    <div id='addaccessory-section'>
        <h1>Thêm phụ kiện</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Tên phụ kiện:
            <input type="text" name='accessoryName' value={accessory.accessoryName} onChange={updateAccessory}></input>
        </label>
        <br />
        <label>
            Mô tả phụ kiện:
            <input type="text" name='accessoryDescription' value={accessory.accessoryDescription} onChange={updateAccessory}></input>
        </label>
        <br />
        <label>
            Ảnh:
            <input type="file" accept='image/*' name='accessoryImage' value={accessory.accessoryImage} onChange={updateAccessory}></input>
        </label>
        <br />
        <label>
            Giá phụ kiện:
            <input type="text" name='accessoryPrice' value={accessory.accessoryPrice} onChange={updateAccessory}></input>
        </label>
        <br />
        <button type='submit'>Thêm phụ kiện</button>
        </form>
    </div>
  )
}

export default AddAccessory