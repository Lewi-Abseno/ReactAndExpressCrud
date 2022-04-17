import React, { useEffect, useState } from 'react'
import "../App.css"
import Medicalinfocard from './Medicalinfocard';
function Medicalfilter(props) {

    return (
        <div>
            {(props.data.filter(x => x.name == props.name)).map(filteredName => (
            <Medicalinfocard name={filteredName.name} systolic={filteredName.systolic} diastolic={filteredName.diastolic} heart_rate={filteredName.heart_rate} respirations={filteredName.respirations} height={filteredName.height} weight={filteredName.weight} />
          ))}
        </div>
    )

}

export default Medicalfilter;