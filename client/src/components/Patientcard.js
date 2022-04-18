import React, { useEffect, useState } from 'react'
import "../App.css"
import { Container, Card, ListGroup, Button} from "react-bootstrap"
import axios from 'axios'

function Patientcard (props) {
    const [phone, setPhone] = useState("")

    const updatePatientPhone = () => {
        axios.put('https://cs4750express-ogldiadhsq-uk.a.run.app/updatepatient', {phone: phone, name: props.name}).then((()=>console.log("Success")))
    }

    const deletePatient = (name) => {
        axios.delete(`https://cs4750express-ogldiadhsq-uk.a.run.app/deletepatient/${name}`)
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
                <Container justify-content-center>
                <div style={{ marginTop: 5 }}>
                    <input type="outline-text" placeholder="Change phone" onChange={(event) => {
                  setPhone(event.target.value)
                  }} />
                </div>
                <div style={{ marginTop: 5 }}>
                    <Button variant="outline-primary" size="sm" onClick={() => {
                        updatePatientPhone()
                    }}>Update</Button>
                </div>
                <div style={{ marginTop: 5, marginBottom: 5 }}>
                    <Button variant="outline-danger" size="sm" onClick={()=>{
                        deletePatient(props.name)
                    }}>Delete</Button>
                </div>
                </Container>
            </Card>
        </div>
    )
}

export default Patientcard;