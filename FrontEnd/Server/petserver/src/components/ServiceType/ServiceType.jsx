import React, { useState } from 'react'
import "./ServiceType.css"
import {boarding} from "../../images/Boarding.png"
import {dogwalking} from "../../images/dog-walking.png"
import {petcare} from "../../images/petcare.png"
import {housesitting} from "../../images/house-sitting.png"
import petsupply from "../../images/pet-supplies.png"

export default function ServiceType() {
    const [clicked, setClicked] = useState(false)
  return (
    <div className={`service-type-container ${clicked ? "service-type-container--clicked" : ""}`}>
        <img src={petsupply} alt="" />
        <p>Service Type</p>
    </div>
  )
}
