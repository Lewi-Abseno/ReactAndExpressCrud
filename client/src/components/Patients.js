import React, { useEffect, useState } from 'react'
import Patientfilter from './Patientfilter'
import "../App.css"
import { Container, Row, Col, Form, Button} from "react-bootstrap"

function PatientDemo() {
    
    const [mysqlData, setmysqlData] = useState([{}])
    const [tempName, setTempName] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        fetch("/patients").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])

    console.log(name)

    return (
        <Container classname='d-flex align-items-center justify-content-center pt-5'>
              <h1> Patient Lookup </h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Search Name" onChange={(event) => {
                  setTempName(event.target.value)
                  }} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() =>{
                  setName(tempName)
                }}>
                Search
                </Button>
              </Form>
              <div className='row-margin'>
                <div>
                  <Patientfilter data={mysqlData} name={name} />
                </div>
                
              </div>
              
        </Container>
    );
}

export default PatientDemo;

/* 
          <h1> Patients</h1>
          <div className='patientDemo'>
            <input type="text" onChange={(event) => {
                setTempName(event.target.value)
                }} />
              <button onClick={() =>{
                setName(tempName)
              }}> Search </button>
              <Patientfilter data={mysqlData} name={name} />
          </div>
*/