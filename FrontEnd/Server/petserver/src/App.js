import './App.css';
import Login from './pages/LoginPage/LogIn';
import AddFood from './pages/AddFoodPage/AddFood';
import AddPet from './pages/AddPetPage/AddPet';
import AddAccessory from './pages/AddAccessoryPage/AddAccessory';
import Card from './components/Card/Card';
import Home from './pages/PetPage/Home';
import SideBar from './components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div id="App">
      <SideBar />
      <Outlet />
      {/* <Home /> */}
    </div>
  );
}

export default App;
