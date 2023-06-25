import React from "react";
import shoplogo from "../../images/logoshop.png";
import "./SideBar.css";
import accessory from "../../images/accessories.png";
import paw from "../../images/pawprint.png";
import food from "../../images/pet-food.png";
import phone from "../../images/phone-call.png";
import cart from "../../images/cartt.png"
import { Link, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div id="sidebar-section">
        <div id="sidebar-header">
          <img src={shoplogo} alt="a logo with a brown dog" />
        </div>
        <div id="sidebar-body">
          <div className="sb-item">
            <img src={paw} alt="" />
            <Link to={"/petpage"}>Thú cưng</Link>
          </div>
          <div className="sb-item">
            <img src={food} alt="" />
            <Link to={"/foodpage"}>Thức ăn</Link>
          </div>
          <div className="sb-item">
            <img src={accessory} alt="" />
            <Link to={"/accessorypage"}>Phụ kiện</Link>
          </div>
          <div className="sb-item">
            <img src={phone} alt="" />
            <Link to={"/servicepage"}>Dịch vụ</Link>
          </div>
          <div className="sb-item">
            <img src={cart} alt="" />
            <Link to={"/cartpage"}>Giỏ hàng</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
