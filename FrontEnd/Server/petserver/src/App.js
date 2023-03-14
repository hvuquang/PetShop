import logo from './logo.svg';
import './App.css';
import Login from './pages/LoginPage/LogIn';
import AddFood from './pages/AddFoodPage/AddFood';
import AddPet from './pages/AddPetPage/AddPet';
import AddAccessory from './pages/AddAccessoryPage/AddAccessory';
import Card from './components/Card/Card';
import Home from './pages/HomePage/Home';
import SideBar from './components/SideBar/SideBar';


function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

export default App;
