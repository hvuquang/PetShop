import React, { useEffect, useState } from "react";
import axios from "axios";
import Uploader from "../../components/Uploader/Uploader";
import ServiceType from "../../components/ServiceType/ServiceType";
import "./AddService.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AddService(props) {
  const [img, setImg] = useState();
  const [serviceDescription, setServiceDescription] = useState("")
  let spaDes = "Spa cho thú cưng"
  let housesittingDes = "Chăm sóc thú cưng tại nhà riêng"
  let petwalkingDes = "Đi bộ với thú cưng"
  let boardingDes = "Nhận chăm sóc thú cưng tại cửa hàng"
  let daycareDes = "Chăm sóc thú cưng theo giờ tron ngày"
  //click vào dịch vụ
  const [serviceClicked, setServiceClicked] = useState(false);
  const [serviceClicked1, setServiceClicked1] = useState(false);
  const [serviceClicked2, setServiceClicked2] = useState(false);
  const [serviceClicked3, setServiceClicked3] = useState(false);
  const [serviceClicked4, setServiceClicked4] = useState(false);
  const [price, setPrice] = useState(0)
  let servicePrice = 300000
  //cài đặt cho DatePicker React
  const [startDate, setStartDate] = useState(new Date());
  //cài đặt popup
  const modalState = props.toggle;
  const action = props.action;
  let food = props.food;
  let updateFood = props.addfood;
  const showFood = props.showFood;

  // const handleDateChange = (date) => {
  //     setDate(date)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formD = new FormData();
    // formD.append("name", food.foodName);
    // formD.append("size", food.foodSize);
    // formD.append("description", food.foodDescription);
    // // formD.append("product_type", "Pet");
    // formD.append("flavour", food.foodFlavour);
    // // formD.append("gender", "Duc");
    // formD.append("price", food.foodPrice);
    // formD.append("image_url", img);
    // axios.post(url, formD).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  const updateService = () => {
    setServiceClicked(!serviceClicked)
    if (serviceClicked === false) {
      setPrice(price + servicePrice)
      setServiceDescription((serviceDescription + "\n" + housesittingDes).trimStart())
    }
    else if (serviceClicked === true) {
      setPrice(price - servicePrice)
      // setServiceDescription(serviceDescription - housesittingDes)
    }
    console.log(price)
    console.log(serviceDescription)
  }
  
  const updateService1 = () => {
    setServiceClicked1(!serviceClicked1)
    if (serviceClicked1 === false) {
      setPrice(price + servicePrice)
      setServiceDescription((serviceDescription + "\n" + petwalkingDes).trimStart())
    }
    else if (serviceClicked1 === true) {
      setPrice(price - servicePrice)
    }
  }

  const updateService2 = () => {
    setServiceClicked2(!serviceClicked2)
    if (serviceClicked2 === false) {
      setPrice(price + servicePrice)
      setServiceDescription((serviceDescription + "\n" + spaDes).trimStart())
    }
    else if (serviceClicked2 === true) {
      setPrice(price - servicePrice)
    }
  }

  const updateService3 = () => {
    setServiceClicked3(!serviceClicked3)
    if (serviceClicked3 === false) {
      setPrice(price + servicePrice)
      setServiceDescription((serviceDescription + "\n" + boardingDes).trimStart())
    }
    else if (serviceClicked3 === true) {
      setPrice(price - servicePrice)
    }
  }

  const updateService4 = () => {
    setServiceClicked4(!serviceClicked4)
    if (serviceClicked4 === false) {
      setPrice(price + servicePrice)
      setServiceDescription((serviceDescription + "\n" + daycareDes).trimStart())
    }
    else if (serviceClicked4 === true) {
      setPrice(price - servicePrice)
    }
  }

  const handlerChangeDes = (e) => 
  {
    let description = document.getElementById("serviceDescription").value
    setServiceDescription(description)
  }

  return (
    //đg test
    <div className={`bg-modal ${modalState ? "modal-active" : ""}`}>
      <div id="addpet-section">
        <h1>Thêm dịch vụ</h1>
        <form>
          <div className="food-form-section" id="service-form-header">
            <div className="addpet-title">
              Chọn loại dịch vụ
              <div className="service-container">
                <ServiceType isClicked={serviceClicked} action={updateService} serviceType="housesitting"/>
                <ServiceType isClicked={serviceClicked1} action={updateService1} serviceType="petwalking"/>
                <ServiceType isClicked={serviceClicked2} action={updateService2} serviceType="petspa"/>
                <ServiceType isClicked={serviceClicked3} action={updateService3} serviceType="boarding"/>
                <ServiceType isClicked={serviceClicked4} action={updateService4} serviceType="petdaycare"/>
              </div>
            </div>
            <br />
            <div className="addpet-title">
              Địa chỉ nhà bạn?
              <input
                type="text"
                name="foodDescription"
                // value={food.foodDescription}
                // onChange={updateFood}
                className="addpet-input"
              ></input>
            </div>
            <br />
            <div className="addpet-title">
              Chi tiết dịch vụ?
              <textarea
                name="serviceDescription"
                // value={food.foodDescription}
                // onChange={updateFood}
                onChange={handlerChangeDes}
                className="addpet-input"
                // inputMode
                // value={serviceDescription}
                value={serviceDescription}
                id="serviceDescription"
              ></textarea>
            </div>
            <br />
            <div className="datepicker-container">
              <div className="addpet-title">
                Thời gian bạn đặt dịch vụ?
                <div className="addpet-title date-container">
                  <DatePicker
                    selected={startDate}
                    //   onSelect={handleDateSelect} //when day is clicked
                    onChange={(date) => setStartDate(date)} //only when value has changed
                    showTimeSelect
                    dateFormat="Pp"
                    className="datetime"
                  />
                </div>
              </div>
              <div className="addpet-title">
                Thời gian muốn kết thúc dịch vụ?
                <div className="addpet-title date-container">
                  <DatePicker
                    selected={startDate}
                    //   onSelect={handleDateSelect} //when day is clicked
                    onChange={(date) => setStartDate(date)} //only when value has changed
                    showTimeSelect
                    dateFormat="Pp"
                    className="datetime"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="addservice-numprice">
              <div className="addpet-title">
                Số lượng thú bạn muốn gửi?
                <select
                  name="foodFlavour"
                  className="addpet-input multivalue-section"
                  // value={food.foodFlavour}
                  // onChange={updateFood}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>
              <div></div>
              <br />
              <div className="addpet-title">
                Giá dịch vụ:
                <input
                  type="text"
                  name="foodPrice"
                  // value={food.foodPrice}
                  // onChange={updateFood}
                  className="addpet-input"
                  placeholder={price}
                ></input>
              </div>
            </div>

            <br />
          </div>

          <div className="form-footer">
            <button className="form-add-btn" type="submit" onClick={showFood}>
              Thêm
            </button>
            <button className="form-exit-btn" onClick={action}>
              Thoát
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddService;
