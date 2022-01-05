import React from 'react'
import './NamePage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NamePage = () => {
    let navigate = useNavigate()

    const movetoMenupage = () => {
        navigate("/menupage")
    }

    return (
        <div id="container_namepage">
            <div className='d-flex align-items-center justify-content-center customHeight'>
                <Form className='border-grey'>
                    <Form.Group className="mb-3 customizeForm">
                        <h1>Order Name</h1>
                            <Form.Control type="email" placeholder="Enter name" />
                                <Form.Text className="text-muted">
                                    Plz enter the name for the order
                                </Form.Text>
                    </Form.Group>
                    <Button onClick={movetoMenupage} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NamePage
