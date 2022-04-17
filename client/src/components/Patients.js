import React, { useEffect, useState } from 'react'
import "../App.css"

function PatientDemo() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5000/patients").then(
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
          {mysqlData.map(x => (
            <h3>{x["ssn"]} {" , "} {x["gender"]} {" , "} {x["race"]} {" , "} {x["age"]} </h3>
          ))}
          </div>
        </div>
    );
}

export default PatientDemo;