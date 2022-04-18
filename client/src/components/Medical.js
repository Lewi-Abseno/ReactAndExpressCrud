import React, { useEffect, useState } from 'react'
import "../App.css"
import Medicalfilter from './Medicalfilter'
import { Container, Row, Col, Form, Button} from "react-bootstrap"

function Medical() {
    
    const [mysqlData, setmysqlData] = useState([{}])
    const [tempName, setTempName] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        fetch("https://cs4750express-ogldiadhsq-uk.a.run.app/medicalinfo").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])    

    return (
          <Container classname='d-flex align-items-center justify-content-center pt-5'>
              <h1> Patient Medical Information Lookup</h1>
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
                  <Medicalfilter data={mysqlData} name={name} />
                </div>
                
              </div>
              
          </Container>
    );
}

export default Medical;
