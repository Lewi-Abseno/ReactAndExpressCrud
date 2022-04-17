import React, { useEffect, useState } from 'react'
import "../App.css"
import Patientcard from './Patientcard';
import { Container } from "react-bootstrap"

function Patientfilter(props) {

    return (
        <div>
            {(props.data.filter(x => x.name == props.name)).map((filteredName, i) => (
            <Patientcard key={i} name={filteredName.name} email={filteredName.email} phone={filteredName.phone} age={filteredName.age} />
          ))}
        </div>
    )

}

export default Patientfilter;