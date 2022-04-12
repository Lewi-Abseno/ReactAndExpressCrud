import React, { useEffect, useState } from 'react'
import "../App.css"

function Providers() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("/providers").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])


    return (
        <div className='providers'>
            <h1> Providers </h1>
          <div className='providers'>
          {mysqlData.map(x => (
            <h3>{x["ssn"]} {" , "} {x["employeeNumber"]} {" , "} {x["appointments"]} </h3>
          ))}
          </div>
        </div>
    );
}

export default Providers;