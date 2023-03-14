import React from "react";
import shoplogo from "../../images/logoshop.png";
import "./SideBar.css";
import accessory from "../../images/accessories.png";
import paw from "../../images/pawprint.png";
import food from "../../images/pet-food.png";
import phone from "../../images/phone-call.png";

function SideBar() {
  return (
    <div id="sidebar-section">
      <div id="sidebar-header">
        <img src={shoplogo} alt="a logo with a brown dog" />
      </div>
      <div id="sidebar-body">
        <div className="sb-item">
          <img src={paw} alt="" />
          <div>Thú cưng</div>
        </div>
        <div className="sb-item">
          <img src={food} alt="" />
          Thức ăn
        </div>
        <div className="sb-item">
          <img src={accessory} alt="" />
          Phụ kiện
        </div>
        <div className="sb-item">
          <img src={phone} alt="" />
          Dịch vụ
        </div>
      </div>
    </div>
  );
}

export default SideBar;
