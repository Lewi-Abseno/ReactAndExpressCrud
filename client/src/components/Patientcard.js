import React, { useEffect, useState } from 'react'
import "../App.css"
import { Container, Card, ListGroup} from "react-bootstrap"
import axios from 'axios'

function Patientcard (props) {
    const [phone, setPhone] = useState("")

    const updatePatientPhone = () => {
        axios.put('/updatepatient', {phone: phone, name: props.name}).then((()=>console.log("Success")))
    }

    const deletePatient = (name) => {
        axios.delete(`/deletepatient/${name}`)
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header><b>{props.name}</b></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item> <b>Email: </b>{props.email}</ListGroup.Item>
                    <ListGroup.Item> <b>Phone: </b>{props.phone} </ListGroup.Item>
                    <ListGroup.Item><b>Age: </b>{props.age} </ListGroup.Item>
                </ListGroup>
                <div>
                    <input type="text" placeholder="Change phone" onChange={(event) => {
                  setPhone(event.target.value)
                  }} />
                    <button onClick={() => {
                        updatePatientPhone()
                    }}>Update</button>
                </div>
                <div>
                    <button onClick={()=>{
                        deletePatient(props.name)
                    }}>Delete</button>
                </div>
            </Card>
        </div>
    )
}

export default Patientcard;