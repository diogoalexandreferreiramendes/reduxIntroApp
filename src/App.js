import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import MenuPage from './pages/MenuPage';
import NamePage from './pages/NamePage';
import OrderPage from './pages/OrderPage';
import ThankyouPage from './pages/ThankyouPage';
import WelcomePage from './pages/WelcomePage';

const App = () => {
  return(
    <div className='app'>
      <Routes>
        <Route path="/" exact element={<WelcomePage />}/>
        <Route path="namecheck" element={<NamePage />}/>
        <Route path="menupage" element={<MenuPage />}/>
        <Route path="orderpage" element={<OrderPage />}/>
        <Route path="thankyou" element={<ThankyouPage />}/>
      </Routes>
    </div>
  )
}

export default App;
