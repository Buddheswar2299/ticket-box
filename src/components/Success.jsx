import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

 
//images
import popcornImage from '../assets/3.png'
import QRImage from '../assets/qr.jpg'
export default function Success(){

    return(

        <Container>
            <Row>
                <Col>
                <img src={popcornImage} style={{height:"500px",margin:"3rem"}} />
                <h4>Your Tickets Confirmed</h4>
                <h6>Enjoy Your Movie</h6>
                </Col>
                <Col><img src={QRImage} style={{height:"500px",margin:"3rem"}} /></Col>
            </Row>
        </Container>
    )
}