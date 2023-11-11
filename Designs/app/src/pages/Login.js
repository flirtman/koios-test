import React, {useEffect, useState} from "react";
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import pumpkin from '../img/Freddys_Logo.svg';


const StylesSet = {
    formWrapper : {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    form : {
        border: '1px solid #ccc',
        borderRadius: '15px',
        padding: '15px',
        maxWidth: '500px',
        margin: 'auto',
        textAlign: 'center'
    },
    formHeader : {
      fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        margin: '25px',
        textAlign: 'left',
        fontSize: '1.5rem'
    },
    img: {
        maxWidth: 100
    }
};


/**
 Login: Login using the API at https://freddy.codesubmit.io/login with POST { username: 'freddy', password: 'ElmStreet2019' }.
 The login endpoint will return a JWT access_token that is valid for 15 minutes and a refresh_token which is valid for 30 days.
 Make sure to also handle wrong credentials properly
 */





const Login = () => {
    const [username, setUsername] = useState('freddy');
    const [password, setPassword] = useState('ElmStreet2019');
    const { login, logout, authenticated } = useAuth();  // Add the useAuth hook to get the login method
    const navigate = useNavigate();



    const handleUserName = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    async function loginUser() {
        const url = 'https://freddy.codesubmit.io/login';
        const data = {
            username: username,
            password: password
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            login(data, result);
            navigate('/dashboard');
        } catch (error) {
            alert('Wrong credentials!');
            console.error('Error:', error.message);
        }
    }

    const handleLogout = () => {
        // Call the logout method
        logout();
        // You can also redirect the user to the login page after logout if needed
        navigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
    };

    return (
        <div className="login-page">
            <Container>
                <div style={StylesSet.formWrapper}>
                    <Form style={StylesSet.form} onSubmit={e => handleSubmit(e)}>
                        <div style={StylesSet.formHeader}>
                            <p>Freddy's Artisanal Helloween Candy Shop</p>
                            <img src={pumpkin} alt="" style={StylesSet.img}/>
                        </div>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                <strong>Username</strong>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Username" onChange={handleUserName} value={username}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                <strong>Password</strong>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password}/>
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type={'submit'}>Login</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
};

export default Login;
