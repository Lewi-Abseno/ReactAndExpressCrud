import React, { useEffect, useState } from 'react'
import "../App.css"

function Medical() {
    
    const [mysqlData, setmysqlData] = useState([{}])

    useEffect(() => {
        fetch("/medical").then(
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
          {mysqlData.map(x => (
            <h3>{x["ssn"]} {" , "} {x["systolic"]} {" , "} {x["diastolic"]} {" , "} {x["heart_rate"]} {" , "} {x["respirations"]} {" , "} {x["height"]} {" , "} {x["weight"]} </h3>
          ))}
          </div>
        </div>
    );
}

export default Medical;