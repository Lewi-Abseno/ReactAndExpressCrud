import React, { useEffect, useState } from 'react'
import "../App.css"

function Patientfilter(props) {

    return (
        <div>
            {(props.data.filter(x => x.name == props.name)).map(filteredName => (
            <h3> {filteredName.name} {filteredName.email} {filteredName.phone} {filteredName.race} </h3>
          ))}
        </div>
    )

}

export default Patientfilter;