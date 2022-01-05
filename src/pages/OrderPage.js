import React from 'react'
import './OrderPage.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    let navigate = useNavigate();

    const movetoCheckOut = () => {
        navigate("/thankyou")
    }

    return (
        <div>
            <h1>OrderPage</h1>
            <Button onClick={movetoCheckOut}>Confrim Order</Button>
        </div>
    )
}

export default OrderPage
