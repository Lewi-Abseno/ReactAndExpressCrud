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

    console.log(name)
    //console.log(mysqlData)
    //console.log(mysqlData.filter(x => x.name == name))

    

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

//{mysqlData.map(x => (
//  <h3>{x["ssn"]} {" , "} {x["systolic"]} {" , "} {x["diastolic"]} {" , "} {x["heart_rate"]} {" , "} {x["respirations"]} {" , "} {x["height"]} {" , "} {x["weight"]} </h3>
//  ))}

//{mysqlData.filter(x => x.name == name).map(filteredName => (
//  <h3> {filteredName} </h3>
//  ))}