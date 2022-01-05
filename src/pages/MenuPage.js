import React from 'react'
import MenuCards from '../components/MenuCards';
import Button from 'react-bootstrap/Button';
import './MenuPage.css';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
    let navigate = useNavigate();

    const movetoYourOrder = () => {
        navigate("/orderpage")
    }

    return (
        <div id="menoCards">
            <div className='d-flex align-items-center bd-highlight'>
                <div class="p-2 w-100 bd-highlight">
                    <h1>MenuPage</h1>
                </div>
                <div class="p-2 flex-shrink-1 bd-highlight">
                    <Button onClick={movetoYourOrder}>Ckeck Out</Button>
                </div>
            </div>
            <div className='d-flex flex-column  align-items-center justify-content-center'>
                <div className='d-flex'>
                    <MenuCards comida="Pão de Alho"/>
                    <MenuCards comida="Azeitonas"/>
                </div>
                <div className='d-flex'>
                    <MenuCards comida="Pizza margarita"/>
                    <MenuCards comida="Pizza Atum"/>
                    <MenuCards comida="Pizza Romana"/>
                    <MenuCards comida="Pizza Peperoni"/>
                </div>
                <div className='d-flex'>
                    <MenuCards comida="Tiramisu"/>
                    <MenuCards comida="CheeseCake"/>
                </div>
                <div className='d-flex'>
                    <MenuCards comida="Agua"/>
                    <MenuCards comida="Vinho"/>
                </div>
            </div>
        </div>
    )
}

export default MenuPage
