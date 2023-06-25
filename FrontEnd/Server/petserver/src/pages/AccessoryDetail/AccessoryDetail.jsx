import React, { useEffect, useState } from "react";
import "./AccessoryDetail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import dogimage from "../../images/golden.png";

export default function AccessoryDetail() {
    const { id } = useParams();
    const [accessoryName, setAccessoryName] = useState([]);
    const [accessoryDescription, setAccessoryDescription] = useState([]);
    const [accessoryImage, setAccessoryImage] = useState([]);
    const [accessoryPrice, setAccessoryPrice] = useState([]);
    const [accessorySize, setAccessorySize] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/v1/accessory/readAccessory/" + id).then((res) => {
            let accessoryData = res.data;
            console.log(res.data);
            setAccessoryName(accessoryData.Product.name)
            setAccessoryDescription(accessoryData.Product.description)
            setAccessoryPrice(accessoryData.accessory.price)
            setAccessorySize(accessoryData.accessory.size_id.name)
            setAccessoryImage(accessoryData.Product.image_url)
            // console.log(1)
        });
    }, []);

    const linkImageAccessory = 'http://localhost:8000/'+accessoryImage

    return (
        <div className="dog-bg-modal">
            <div className="modal-content">
                <div className="food-content-header">
                    <div className="food-header-left">
                        <img src={linkImageAccessory} alt="golden-dog" />
                    </div>
                    <div className="food-header-right">
                        <p className="food-detail-title" id="foodName">
                            {accessoryName}
                        </p>
                        <span className="food-detail-title">Giá:</span>
                        <br />
                        <input
                            // type="textarea"
                            className="subtitle-information"
                            id="foodPrice"
                            defaultValue={accessoryPrice}
                        // onChange={(value) => {setPetPrice(value); console.log(value)}}
                        >
                            {/* {petBreed} */}
                        </input>

                        <div>
                            <p className="food-detail-title">Kích cỡ:</p>
                            <select
                                name="foodSize"
                                className="addpet-input multivalue-section food-detail-information"
                                value={accessorySize}
                                id="foodSize"
                            >
                                <option value="S" onClick={() => setAccessorySize("S")}>S</option>
                                <option value="M" onClick={() => setAccessorySize("M")}>M</option>
                                <option value="L" onClick={() => setAccessorySize("L")}>L</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                <div className="food-content-body">
                    <p className="food-detail-title">Mô tả sản phẩm:</p>
                    <div className="food-body-description">
                        <textarea
                            type="textarea"
                            className="subtitle-information information-description "
                            defaultValue={accessoryDescription}
                            id="foodDescription"
                        >
                            {/* {petBreed} */}
                        </textarea>
                    </div>
                </div>
                <div className="content-footer">
                    {/* <button id="btn-modify">Chỉnh sửa</button> */}
                    <button id="btn-save" >Lưu</button>
                    <button id="btn-delete">
                        Xóa
                    </button>
                    <button id="btn-close">
                        <Link to="/accessorypage">Thoát</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

