import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "../App.css"

function Doctor() {
    
  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("http://localhost:5000/doctors").then(
        response => response.json()
      ).then(
        data =>{
          setData(data)
        }
      )
  },[])


  return (
    <div className="container" style={{ marginTop: 50 }}>
      <Table striped border hover responsive="sm">  
      <thead class="thead-dark">  
          <tr>  
              <th scope="col">Employee Number</th>  
              <th scope="col">Doctor Name</th>
              <th scope="col">Doctor Phone</th>  
              <th scope="col">Doctor Email</th>    
          </tr>  
      </thead>  
      <tbody>  
          {data.map(item => {  
              return <tr key={item["employeeNumber"]}>
                  <td>{item.employeeNumber}</td>  
                  <td>{item.name}</td>  
                  <td>{item.phone}</td>  
                  <td>{item.email}</td>  
              </tr>  
          })}  
      </tbody>  
    </Table>
    </div>
  );
}

export default Doctor;