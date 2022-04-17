import React, { useEffect, useState } from 'react'
import "../App.css"
import Patientcard from './Patientcard';

function Patientfilter(props) {

    return (
        <div>
            {(props.data.filter(x => x.name == props.name)).map((filteredName, i) => (
            <Patientcard key={i} name={filteredName.name} email={filteredName.email} phone={filteredName.phone} race={filteredName.race} />
          ))}
        </div>
    )

}

export default Patientfilter;