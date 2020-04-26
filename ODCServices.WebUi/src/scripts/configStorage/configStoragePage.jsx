import { ConfigTable } from "./table/configTable";
import { NewConfigModal } from "./newConfigModal";

export class ConfigStoragePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headers: [],
			configs: []
		};
	}

	componentDidMount() {
		this.loadAll();
	}

	getData(url, callBack) {
		var xhr = new XMLHttpRequest();
		xhr.open("get", url, true);
		xhr.onload = function () {
			const data = JSON.parse(xhr.responseText);
			callBack(data);
		}.bind(this);
		xhr.send();
	}

	loadAll() {
		const getAllUrl = this.props.getAllUrl;

		this.getData(getAllUrl, (data) => {
				this.setState({
					headers: data.builtInHeaders.concat(data.headers),
					configs: data.configs
				});
			});
	}

	showNewConfigDialog() {
		
	}

	render() {
		return <div>
			<div className="text-center">
				<h1 className="display-4">Config Storage</h1>	
			</div>
			<nav className="navbar navbar-light bg-light">
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Filter" aria-label="Filter"/>
				</form>
				<button
					type="button"
					className="btn btn-success"
					data-toggle="modal"
					data-placement="bottom"
					data-target="#newConfigModal"
					onClick={() => this.showNewConfigDialog()}>Add new config file</button>
			</nav>
			<NewConfigModal/>
			<ConfigTable headers={this.state.headers} configs={this.state.configs} downloadUrl={this.props.downloadUrl} />
			
		</div>;
	}
}