import React, { useEffect, useState } from 'react'
import "../App.css"

function Companies() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("/companies").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])


    return (
        <div className='companies'>
            <h1> Companies and their numbers </h1>
          <div className='companies'>
          {mysqlData.map(x => (
            <h3>{x["companyName"]} {": "} {x["companyPhone"]}</h3>
          ))}
          </div>
        </div>
    );
}

export default Companies;