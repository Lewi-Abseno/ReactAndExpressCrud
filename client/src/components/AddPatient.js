import React, { useState } from "react";
import axios from 'axios'
import { Button } from 'react-bootstrap';
import "../App.css"


function Patient() {
    
    const [SSN, setSSN] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [race, setRace] = useState("")
    const [age, setAge] = useState(0)

    const addPatient = () => {
        axios.post('https://cs4750express-ogldiadhsq-uk.a.run.app/addpatient', 
        {SSN: SSN, name: name, email: email, phone: phone, race: race, age: age}).then((()=>console.log("Success")))
    }

    return (
        <div className="App">
            <div className="information">
                <h1> Add Patient </h1>
                <label>SSN</label>
                <input type="text" onChange={(event) => {
                    setSSN(event.target.value)
                }}/>
                <label>Name</label>
                <input type="text" onChange={(event) => {
                    setName(event.target.value)
                }}/>
                <label>Email</label>
                <input type="text" onChange={(event) => {
                    setEmail(event.target.value)
                }}/>
                <label>Phone</label>
                <input type="text" onChange={(event) => {
                    setPhone(event.target.value)
                }}/>
                <label>Race</label>
                <input type="text" onChange={(event) => {
                    setRace(event.target.value)
                }}/>
                <label>Age</label>
                <input type="text" onChange={(event) => {
                    setAge(event.target.value)
                }}/>
                <Button onClick={addPatient}>Add Patient</Button>
            </div>
        </div>
    );
}

export default Patient;