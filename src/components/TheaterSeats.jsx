import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { persistentLocalCache } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



export default function TheaterSeats({movieName}){
    const navigate = useNavigate()
    const[seatsArr, setSeatsArr] = useState([])
    const[selectedSeat, setSelectedSeat] = useState([])
    
    const createSeats = ()=>{
        let totalRows = 6
        let totalNoOfSeatsInaRow = 12
        let tempSeats = []
        let row= 0
        let ch = "A"
        while(row < totalRows){
            let col = 1
            let rowArr = []
            while(col <= totalNoOfSeatsInaRow){
                rowArr.push(ch+col)
                col++
            }
            tempSeats.push(rowArr)
            row++
            ch= String.fromCharCode(ch.charCodeAt(0)+1)
        }
        // console.log(tempSeats)
        setSeatsArr(tempSeats)
    }
    useEffect(()=>{
        createSeats()
    },[])
    
    const handleSelect = (newSeat)=>{
        
        setSelectedSeat((preSelectedSeat)=>{
            if(!preSelectedSeat.includes(newSeat)){
                return  [...preSelectedSeat,newSeat]
            }else{
               return preSelectedSeat.filter((pre)=>pre !== newSeat)
                
            }
        })
    }


    
    return(

        <Container style={{marginTop:"12px"}}>
            <span style={{fontWeight:"700",fontSize:"2rem"}}>{movieName}</span>
            <span style={{marginLeft:"30%"}}>screen this side</span>

           <Container style={{marginTop:"5rem"}}>
            {seatsArr.map((singleArr,index)=>{
            return(
                <Row key={index} style={{margin:"12px"}}>
                    {singleArr.map((seat)=>{
                        if(selectedSeat){
                        var isSelected = selectedSeat.indexOf(seat) > -1 
                        
                        }
                        return <Col ><Button key={seat} 
                        style={{backgroundColor:isSelected?'green':""}}
                        onClick={()=>{handleSelect(seat)}} >{seat}</Button></Col>
                    })}
                </Row>
            )
           })}
           {selectedSeat.length > 0 ? <div style={{marginTop:"5rem"}}>{selectedSeat.map((seatFor,index)=>{
            return(
                
                
                    <Button key={index} onClick={(seatFor)=>{
                        const indexToDelete = selectedSeat.indexOf(seatFor)
                        selectedSeat.splice(index,index+1)
                        console.log('element is deleted')
                    }}
                    style={{margin:"12px",background:"#607D8B"}}>{seatFor}</Button>
                    
                

            )
            
           })}
           <p>Total Amount: {selectedSeat.length*200}</p>
           <Button onClick={()=> navigate('/success')}>CheckOut</Button>
           </div> : <div>No Seat is selected</div>}
           </Container>
                

            
            

        </Container>
    )
}