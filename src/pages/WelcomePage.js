import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    let navigate = useNavigate();

    const movetoNamePage = () => {
        navigate("namecheck")
    }

    return (
        <div id="containar_welcome_page">
            <div className='d-flex align-items-center justify-content-center customHeight borderGrey'>
                <div>
                    <h1>Welcome <br/> to <br/>RestauWeb</h1>
                    <Button onClick={movetoNamePage}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage
