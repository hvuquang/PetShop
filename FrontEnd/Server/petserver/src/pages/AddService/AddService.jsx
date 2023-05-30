import React, { useState } from "react";
import axios from "axios";
import Uploader from "../../components/Uploader/Uploader";
import ServiceType from "../../components/ServiceType/ServiceType";
import "./AddService.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AddService(props) {
  const [img, setImg] = useState();
  //click vào dịch vụ
  const [serviceClicked, setServiceClicked] = useState(false);
  const [date, setDate] = useState(new Date());
  //cài đặt cho DatePicker React
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
    alert(serviceClicked)
  }

  return (
    //đg test
    <div className={`bg-modal ${modalState ? "modal-active" : "modal-active"}`}>
      <div id="addpet-section">
        <h1>Thêm dịch vụ</h1>
        <form>
          <div className="food-form-section">
            <div className="addpet-title">
              Chọn loại dịch vụ
              <div className="service-container">
                <ServiceType isClicked={serviceClicked} action={updateService}/>
                <ServiceType isClicked={serviceClicked} action={updateService}/>
                <ServiceType isClicked={serviceClicked} action={updateService}/>
                <ServiceType isClicked={serviceClicked} action={updateService}/>
                <ServiceType isClicked={serviceClicked} action={updateService}/>
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
            <div className="datepicker-container">
              <div className="addpet-title">
                Thời gian bạn đặt dịch vụ?
                <div className="addpet-title date-container">
                  <DatePicker
                    selected={date}
                    //   onSelect={handleDateSelect} //when day is clicked
                    // onChange={() => setDate(date)} //only when value has changed
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
                    selected={date}
                    //   onSelect={handleDateSelect} //when day is clicked
                    // onChange={() => setDate(date)} //only when value has changed
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
