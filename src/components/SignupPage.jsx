import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import loginPageImage from '../assets/images.png'
import '../App.css'
import LoginPage from './LoginPage';
import { Routes,Route,NavLink, useNavigate } from 'react-router-dom';

//import firebase 
import {auth} from './firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage(){
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState("")
    const[user,setUser] = useState("")
    const navigate = useNavigate()

    const[error,setError] = useState('')

    async function handlelogin(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password,user).then((userCredentials)=>{
            const userDetails = userCredentials
            navigate('/moviegallery')
            
        }).catch(err=>{
            if(email){
                  setError('user already exists')
            }
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
                                    <Form.Control type="email" 
                                    value={email}
                                    placeholder="Enter email" onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password}
                                    placeholder="Password" onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword2">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" value={user}
                                    placeholder="User Name" onChange={(e)=>{
                                        setUser(e.target.value)
                                    }}
                                    />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" style={{width:"100%"}} onClick={handlelogin}>
                                    Sign up
                                </Button>
                                <p style={{color:"red"}}>{error}</p>
                                <div>Already have an account? Please <NavLink to="/">Login</NavLink></div>
                            </Form>
                        </Card.Body>
                    </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}