import React, { Component } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from 'axios';
import "../App.css";

const selectOptions = {
    "Aetna\r": 'Aetna',
    "Anthem Inc.\r": 'Anthem Inc.',
    "Centene\r": 'Centene',
    "Cigna\r": 'Cigna',
    "CVS\r": 'CVS',
    "Humana\r": 'Humana',
    "Kaiser\r": 'Kaiser',
    "United Health\r": 'United Health'
}

class Insurance extends Component {
	

  state = {
		ins: [],
		columns: [
			{
				dataField: "id",
				text: "SSN",
			},
			{
				dataField: "pol_num",
				text: "Policy Number",
			},
			{
				dataField: "company",
				text: "Company Name ",
				filter: selectFilter({
          options: selectOptions
        })
			}
		]
	};

	componentDidMount() {
		axios
			.get("https://cs4750express-ogldiadhsq-uk.a.run.app/insurance")
			.then(json =>
				json.data.map(item => ({
					id: item.ssn,
					pol_num: item.policyNumber,
					company: JSON.parse(JSON.stringify(item.companyName)).replace(/"/g,"")
				}))
			)
			.then(
				newData => this.setState({ ins: newData })
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
					data={this.state.ins}
					columns={this.state.columns}
					filter={filterFactory()}
					pagination={paginationFactory()}
				/>
			</div>
		);
	}
}

export default Insurance;