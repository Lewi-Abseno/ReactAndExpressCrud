import React, { Component } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from 'axios';
import "../App.css";

const selectOptions = {
  307: 'Alonzo Shaffer',
  371: 'Valentina Gill',
  461: 'Julius Hobbs',
  552: 'Gabriel Schneider',
  603: 'Carissa Rivers',
  631: 'Darion Bowen',
  945: 'Louis McIntosh',
  976: 'Giovani Perkins'
}

class Providers extends Component {
    
  state = {
		prov: [],
		columns: [
			{
				dataField: "id",
				text: "SSN",
			},
			{
				dataField: "emp_num",
				text: "Employee Number ",
        filter: selectFilter({
          options: selectOptions,
          placeholder: 'Select Doctor'
        })
			},
			{
				dataField: "appoint",
				text: "Appointments ",
			}
		]
	};

	componentDidMount() {
		axios
			.get("http://localhost:5000/provider")
			.then(json =>
				json.data.map(item => ({
					id: item.ssn,
					emp_num: item.employeeNumber,
					appoint: item.appointments
				}))
			)
			.then(
				newData => this.setState({ prov: newData })
			)
			.catch(error => alert(error));
	}

	render() {
		return (
			<div className="container" style={{ marginTop: 50 }}>
				<BootstrapTable
					striped
					hover
					keyField="id"
					data={this.state.prov}
					columns={this.state.columns}
					filter={filterFactory()}
					pagination={paginationFactory()}
				/>
			</div>
		);
	}
}

export default Providers;