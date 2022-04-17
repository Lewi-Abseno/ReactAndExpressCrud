import React, { useEffect, useState } from 'react'
import "../App.css"
import Medicalfilter from './Medicalfilter'

function Medical() {
    
    const [mysqlData, setmysqlData] = useState([{}])
    const [tempName, setTempName] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        fetch("/medicalinfo").then(
          response => response.json()
        ).then(
          data =>{
            setmysqlData(data)
          }
        )
    },[])    

    return (
        <div className='medical'>
            <h1> Medical Info </h1>
          <div className='medical'>
            <input type="text" onChange={(event) => {
              setTempName(event.target.value)
              }} />
            <button onClick={() =>{
              setName(tempName)
            }}> Search </button>
            <Medicalfilter data={mysqlData} name={name} />
          </div>
        </div>
    );
}

export default Medical;
