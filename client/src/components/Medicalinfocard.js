import React, { useEffect, useState } from 'react'
import "../App.css"

function Medicalinfocard (props) {
    return (
        <div>
            <h1> {props.name} </h1>
            <p> {props.systolic} </p>
            <p> {props.diastolic} </p>
            <p> {props.heart_rate} </p>
            <p> {props.respirations} </p>
            <p> {props.height} </p>
            <p> {props.weight} </p>

        </div>
    )
}

export default Medicalinfocard;