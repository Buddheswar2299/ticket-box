import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import loginPageImage from '../assets/images.png'
import '../App.css'

import {Routes,Route,Link,NavLink, useSearchParams, useNavigate} from 'react-router-dom'
import SignupPage from './SignupPage';

//import firebase
import {auth} from './firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
export default function LoginPage(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[errorMessage,setErrorMessage] = useState('')
    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const userDetails = userCredential
            console.log(userDetails.email)
            navigate('/moviegallery')
           
        }).catch(err=>{
            
            setErrorMessage('User Not Found')

        })
    }


    return (
        
        <div className='container-loginPage'> 
            <Container className='container-inside-loginPage'>
                <Row className='container-inside-row-loginPage'>
                    <Col className='img-class'>
                        <img src={loginPageImage} width={500} height={500} className='img-loginPage'/>
                    </Col>
                    <Col style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
                    <Card style={{ width: '25rem',padding:"1rem"}}>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={email}
                                    placeholder="Enter email" onChange={(e) =>{
                                        setEmail(e.currentTarget.value)
                                    }}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password}
                                    placeholder="Password" onChange={(e)=>{
                                        setPassword(e.currentTarget.value)
                                    }}/>
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" onClick={handleLogin}
                                style={{width:"100%"}}>
                                    Login
                                </Button>
                                <p style={{color:"red"}}>{errorMessage}</p>
                                <div>New here? Please <NavLink to="/signup">Signup</NavLink> </div>
                            </Form>
                        </Card.Body>
                    </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}