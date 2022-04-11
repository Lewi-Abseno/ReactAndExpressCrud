import React, { useEffect, useState } from 'react'
import "../App.css"

function Insurance() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("/insurance").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])


    return (
        <div className='insurance'>
            <h1> Insurance Policies </h1>
          <div className='insurance'>
          {mysqlData.map(x => (
            <h3>{x["ssn"]} {" , "} {x["policyNumber"]} {" , "} {x["companyName"]} </h3>
          ))}
          </div>
        </div>
    );
}

export default Insurance;