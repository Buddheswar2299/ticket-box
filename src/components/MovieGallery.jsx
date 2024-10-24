import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Movies from '../film.json'
import { useNavigate } from 'react-router-dom';

//import database
import {db} from './firebase'
import { DocumentSnapshot, collection, getDocs ,getDoc,doc,setDoc,addDoc  } from "firebase/firestore"; 


export default function MovieGallery(){
    console.log(Movies.movies)
    const navigate = useNavigate();

  useEffect(()=>{
    const getAllUsers = async() =>{
      const docRef = await addDoc(collection(db, "cities"), {
        name: "Tokyo",
        country: "Japan"
      });
    }

    getAllUsers()

  })

    
    return(

        <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
           {Movies.movies.map((movie)=>{
            return(
                <Card onClick={()=>{navigate(`/theaters/${movie.imdbVotes}`,{state:movie})}}
                style={{ width: '22rem',cursor:'pointer' }}
                key={movie.imdbVotes}>
                <Card.Img variant="top" src={movie.Poster} height={250} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  {/* <Button variant="primary">checkout</Button> */}
                </Card.Body>
              </Card>
            )
           })}
        </div>
    )
}