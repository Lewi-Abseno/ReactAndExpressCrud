import React, { useEffect, useState } from 'react'
import "../App.css"

function Doctor() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("/doctor").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])


    return (
        <div className='doctor'>
            <h1> Doctors </h1>
          <div className='doctor'>
          {mysqlData.map(x => (
            <h3>{x["employeeNumber"]} {" , "} {x["name"]} {" , "} {x["phone"]} {" , "} {x["email"]} </h3>
          ))}
          </div>
        </div>
    );
}

export default Doctor;