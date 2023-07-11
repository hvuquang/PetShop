import "./App.css";
import Login from "./pages/LoginPage/LogIn";
import AddFood from "./pages/AddFoodPage/AddFood";
import AddPet from "./pages/AddPetPage/AddPet";
import AddAccessory from "./pages/AddAccessoryPage/AddAccessory";
import Card from "./components/Card/Card";
import Home from "./pages/PetPage/Home";
import SideBar from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import DogDetail from "./pages/DogDetail/DogDetail";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
import Uploader from "./components/Uploader/Uploader";
import ServiceType from "./components/ServiceType/ServiceType";
import AddService from "./pages/AddService/AddService";

function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
