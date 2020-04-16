import { ConfigTable } from "./configTable";

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
				<h1 className="display-4">Config Storage </h1>	
			</div>
			<ConfigTable configs={this.state.configs}/>
		</div>;
	}
}

ReactDOM.render(
	<ConfigList GetAllUrl="ConfigStorage/GetAll"/>,
	document.getElementById("configStorageAppContainer")
);