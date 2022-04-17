import React, { useEffect, useState } from 'react'
import "../App.css"

function Patientcard (props) {
    return (
        <div>
            <h3> {props.name} </h3>
            <p> Email: {props.email} </p>
            <p> Phone: {props.phone} </p>
            <p> Race: {props.race} </p>
        </div>
    )
}

export default Patientcard;