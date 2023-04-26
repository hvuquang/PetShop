import React from "react";
import "./DogDetail.css";
import dogimage from "../../images/golden.png";
import { Link } from "react-router-dom";

export default function DogDetail() {
  return (
    <div className="dog-bg-modal">
      <div className="modal-content">
        <div className="content-header">
          <div className="content-left">
            <p className="content-subtitle">Giống</p>
            <p className="subtitle-information">The Golden Retriever</p>
            <p className="content-subtitle">Về giống</p>
            <p className="subtitle-information">
              The Golden Retriever is a Scottish breed of retriever dog of
              medium size. It is characterised by a gentle and affectionate
              nature and a striking golden coat. It is commonly kept as a pet
              and is among the most frequently registered breeds in several
              Western countries
            </p>
            <p className="content-subtitle">Màu</p>
            <p className="subtitle-information">Nâu vàng đậm; nhạt; kem </p>
            <p className="content-subtitle">Tuổi thọ</p>
            <p className="subtitle-information">10 - 12 năm</p>
            <p className="content-subtitle">Chiều cao</p>
            <p className="subtitle-information">Cái: 51-56 cm, Đực: 56-61 cm</p>
            <p className="content-subtitle">Cân nặng</p>
            <p className="subtitle-information">Cái: 25-32 kg, Đực: 30-34 kg</p>
            <p className="content-subtitle">Xuất xứ</p>
            <p className="subtitle-information">Mĩ, Anh, Scotland</p>
            <p className="content-subtitle">Tính cách</p>
            <p className="subtitle-information">
              Thông minh, Thân thiện, Đáng tin cậy
            </p>
          </div>
          <div className="content-right">
            <img src={dogimage} alt="golden-dog" />
            <p className="content-subtitle">8.000.000 VND</p>
          </div>
        </div>
        <div className="content-footer">
          <button id="btn-modify">Chỉnh sửa</button>
          <button id="btn-save">Lưu</button>
          <button id="btn-delete">Xóa</button>
          <button id="btn-close"><Link to="/petpage">Thoát</Link></button>
        </div>
      </div>
    </div>
  );
}
