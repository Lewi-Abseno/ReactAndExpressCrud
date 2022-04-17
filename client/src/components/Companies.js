import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "../App.css";

function Companies() {
    
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5000/companies").then(
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
                <th scope="col">Company Name</th>  
                <th scope="col">Company Phone</th>  
            </tr>  
        </thead>  
        <tbody>  
            {data.map(item => {  
                return <tr key={item["companyName"]}>
                    <td>{item.companyName}</td>  
                    <td>{item.companyPhone}</td>  
                </tr>  
            })}  
        </tbody>  
      </Table>
      </div>
    );
}

export default Companies;