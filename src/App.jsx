import React, { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css"
import SignupPage from './components/SignupPage';
import {Routes, Route, NavLink} from 'react-router-dom'
import Movies from './film.json'
import MovieGallery from './components/MovieGallery';
import Theaters from './components/Theaters';
import TheaterSeats from './components/TheaterSeats';
import Success from './components/Success';
function App() {
  const[movieName,setMovieName] = useState('')
  
  
  return (
   <div>
     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ticket Box
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Routes>
      <Route path="signup" element={<SignupPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/moviegallery" element={<MovieGallery movies={Movies.movies}/>} />
      <Route path='/theaters/:id' element={<Theaters setMovieName={setMovieName}/>} />
      <Route path="/seats" element={<TheaterSeats movieName={movieName}/>} />
      <Route path="/success" element={<Success />} />
    </Routes>

    {/* <LoginPage /> */}
    {/* <MovieGallery /> */}
    {/* <SignupPage /> */}
   </div>
  )
}

export default App
