import React, { useState } from "react";
import "./ServiceType.css";
import { boarding } from "../../images/Boarding.png";
import { dogwalking } from "../../images/dog-walking.png";
import { petcare } from "../../images/petcare.png";
import { housesitting } from "../../images/house-sitting.png";
import petsupply from "../../images/pet-supplies.png";

export default function ServiceType(props) {
  const clickAction = props.action
  const isClicked = props.isClicked
  return (
    <div
      className={`service-type-container ${
        isClicked ? "service-type-container--clicked" : " "
      }`
    } onClick={clickAction}
    >
      <img src={petsupply} alt="a service for pet" />
      <p>Service Type</p>
    </div>
  );
}
