import React, { useEffect, useState } from 'react'
import "../App.css"
import Patientfilter from './Patientfilter'

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

  
    return (
        <div className='patientDemo'>
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
        </div>
    );
}

export default PatientDemo;