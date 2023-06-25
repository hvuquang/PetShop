import React, { useEffect, useState } from "react";
import "./ServiceCard.css";
import axios from "axios";

function ServiceCard(props) {
  let id = props.serviceI._id;
  const [service, setService] = useState(props.serviceI);
  const [customerName, setCustomerName] = useState();
  const [serviceStatus, setServiceStatus] = useState();
  const [serviceDescription, setServiceDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [_id, set_id] = useState()

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/service/readService/" + id)
      .then((res) => {
        if (res.data.service === null) return
        let serviceData = res.data
        setCustomerName(serviceData.product.name)
        set_id(serviceData.product._id)
        if (serviceData.service.status === "pending") {
          setServiceStatus("Đang chờ")
        }
        else if (serviceData.service.status === "complete") {
          setServiceStatus("Hoàn thành")
        }
        setServiceDescription(serviceData.product.description);
        let dateStr = serviceData.service.startTime
        let myDate = new Date(dateStr)
        setStartDate(myDate.getDate() + " / " + myDate.getMonth())
        dateStr = serviceData.service.endTime
        myDate = new Date(dateStr)
        setEndDate(myDate.getDate() + " / " + myDate.getMonth())
      });
  });

  const deleteService = () => {
    axios.delete("http://localhost:8000/v1/service/deleteService/" + _id).then(
      (res) => {
        alert("Xóa thành công");
        // window.location.href = "http://localhost:3000/servicepage";
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div className="service-card-container">
      {/* <div className="service-container-header">
        <img src="#" alt="service-logo" />
        <p className="service-body-title">House Sitting</p>
      </div> */}
      <p>{id}</p>
      <div className="service-container-body">
        <div className="service-body-section">
          <p className="service-body-title">Tên:</p>
          <p>{customerName}</p>
        </div>
        <div>
          <p className="service-body-title">Chi tiết dịch vụ:</p>
            {/* <textarea>{serviceDescription}</textarea> */}
            <textarea
                name="serviceDescription"
                className="addpet-input service-card--description"
                value={serviceDescription}
                id="serviceDescription"
                readOnly
              ></textarea>
        </div>
        {/* <div className="service-body-section">
          <p className="service-body-title">Số điện thoại:</p>
          <p>{service.duration}</p>
        </div> */}
        <div className="service-body-section">
          <p className="service-body-title">Gửi: {startDate}</p>
          <p className="service-body-title">Nhận: {endDate}</p>
        </div>
        <div className="service-body-section">
          <p className="service-body-title">Tình trạng:</p>
          <p>{serviceStatus}</p>
        </div>
      </div>
      <div className="service-container-footer">
        <button id="service-container-accept">Chấp nhận</button>
        <button id="service-container-decline" onClick={deleteService}>Từ chối</button>
      </div>
    </div>
  );
}

export default ServiceCard;
