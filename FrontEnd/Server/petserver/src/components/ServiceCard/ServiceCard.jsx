import React from "react";
import './ServiceCard.css';

function ServiceCard() {
  return (
    <div className="service-card-container">
      <div className="service-container-header">
        <img src="#" alt="service-logo" />
        <p className="service-body-title">House Sitting</p>
      </div>
      <div className="service-container-body">
        <div className="service-body-section">
          <p className="service-body-title">Tên:</p>
          <p>Vũ Quang Huy</p>
        </div>
        <div className="service-body-section">
          <p className="service-body-title">Địa chỉ:</p>
          <p>Bình Dương</p>
        </div>
        <div className="service-body-section">
          <p className="service-body-title">Số điện thoại:</p>
          <p>0854021017</p>
        </div>
        <div className="service-body-section">
          <p className="service-body-title">Gửi: 23/1</p>
          <p className="service-body-title">Nhận: 24/1</p>
        </div>
        <div className="service-body-section">
          <p className="service-body-title">Loại:</p>
          <p>Chó, Mèo</p>
        </div>
        <div className="service-body-section">
          <p className="service-body-title">Số lượng:</p>
          <p>3</p>
        </div>
      </div>
      <div className="service-container-footer">
        <button id="service-container-accept">Chấp nhận</button>
        <button id="service-container-decline">Từ chối</button>
      </div>
    </div>
  );
}

export default ServiceCard;
