import React, { useEffect, useState } from 'react'
import "../App.css"

function Medicalinfocard (props) {
    return (
        <div>
            <h3> {props.name} </h3>
            <p> Systolic: {props.systolic} </p>
            <p> Diastolic : {props.diastolic} </p>
            <p> Heart Rate: {props.heart_rate} </p>
            <p> Respirations: {props.respirations} </p>
            <p> Height: {props.height} </p>
            <p> Weight: {props.weight} </p>

        </div>
    )
}

export default Medicalinfocard;