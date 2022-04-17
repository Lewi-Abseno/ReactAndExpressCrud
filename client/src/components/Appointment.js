import React, { Component } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter, dateFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from 'axios';
import "../App.css";

class Appointment extends Component {
	state = {
		appts: [],
		columns: [
			{
				dataField: "id",
				text: "SSN",
			},
			{
				dataField: "employee",
				text: "Employee ",
				filter: textFilter({
					placeholder: "e.g. 123"
				})
			},
			{
				dataField: "date",
				text: "Appointment Date",
				//filter: dateFilter()
			}
		]
	};

	componentDidMount() {
		axios
			.get("http://localhost:5000/appointments")
			.then(json =>
				json.data.map(item => ({
					id: item.ssn,
					employee: item.employeeNumber,
					date: item.appointment_date_time
				}))
			)
			.then(
				newData => this.setState({ appts: newData })
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
					data={this.state.appts}
					columns={this.state.columns}
					filter={filterFactory()}
					pagination={paginationFactory()}
				/>
			</div>
		);
	}
}

export default Appointment;