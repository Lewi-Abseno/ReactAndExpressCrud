import React, { useEffect, useState } from 'react'
import "../App.css"

function Appointment() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("/appointment").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])


    return (
        <div className='appointment'>
            <h1> Appointments </h1>
          <div className='appointment'>
          {mysqlData.map(x => (
            <h3>{x["ssn"]} {" , "} {x["employeeNumber"]} {" , "} {x["appointment_date_time"]} </h3>
          ))}
          </div>
        </div>
    );
}

export default Appointment;