import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

export default function Theaters({setMovieName}){
    const location = useLocation()
    const navigate = useNavigate()
    const{Title,Poster,Plot,Language} = location.state
    const[latLng,setLatLng] = useState({})
    const [theaters,setTheaters] = useState([])
    

    const TIMINGS = ["10:30AM","03:00PM","06:00PM","9:30PM"]
    useEffect(()=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLatLng({
                    lat:position.coords.latitude,
                    lng: position.coords.longitude
                })
            })
        }
    },[])

    useEffect(()=>{
        console.log(latLng)
        if(Object.keys(latLng).length>0){
            const geoAPI =`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:78.024388857,15.820227429&limit=20&apiKey=53ff20f2e0b647d98f8b5a4ff3d30f06`
             axios.get(geoAPI).then(res=>{
              console.log(res.data.features)
              const featuresArr = res.data.features
            const returnedArr =   featuresArr.map((feature=> {
                return feature.properties.name
              }))
              console.log(returnedArr)
              setTheaters(returnedArr)
            })

        }
    },[latLng])
    console.log(theaters)
    return(

        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '24rem' }}>
                            <Card.Img variant="top" src={Poster} />
                            <Card.Body>
                                <Card.Title>{Title}</Card.Title>
                                <Card.Text>{Plot}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {theaters.map((theater,index)=>{
                            
                                return(
                                    <Container key={index}>
                                    <Card style={{margin:"18px"}}> 
                                        
                                    <h2 >{theater}</h2>
                                    <Container>
                                    {TIMINGS.map((time,indexTime)=>{
                                        return(
                                            <Button key={indexTime} style={{width:"20%",margin:"10px"}} onClick={()=>{setMovieName(Title); navigate('/seats')}}>{time}</Button>
                                        )
                                    })}
                                    </Container>

                                    </Card>
                                    
                                    </Container>
                                )
                            })     
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}