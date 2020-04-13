//import { TableHeader } from "./TableHeader";

class TableHeader extends React.Component {
	render() {
		return <thead>
		       <tr>
			       <th scope="col">Name</th>
			       <th scope="col">Version</th>
			       <th scope="col">Created</th>
			       <th scope="col">Download</th>
		       </tr>
		       </thead >;
	}
}

class ConfigList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { configs: [] };
	}

	loadData() {
		var xhr = new XMLHttpRequest();
		xhr.open("get", this.props.GetAllUrl, true);
		xhr.onload = function () {
			var data = JSON.parse(xhr.responseText);
			this.setState({ configs: data });
		}.bind(this);
		xhr.send();
	}

	componentDidMount() {
		this.loadData();
	}

	render() {
		return <div>
			<div className="text-center">
				<h1 className="display-4">Config Storage</h1>	
			</div>
			<table className="table table-hover table-sm">
				<TableHeader/>
				<tbody>
				{
					this.state.configs.map(function (config) {
						return <tr>
									<th scope="row">{config.name}</th>
									<td>{config.version}</td>
									<td>{config.created}</td>
									<td><button type="button" className="btn btn-link btn-sm">Download</button></td>
						       </tr>;
					})
				}

				</tbody>
			</table>
		</div>;
	}
}

ReactDOM.render(
	<ConfigList GetAllUrl="ConfigStorage/GetAll"/>,
	document.getElementById("configStorageAppContainer")
);