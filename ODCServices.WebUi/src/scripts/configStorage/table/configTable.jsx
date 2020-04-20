import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";

export class ConfigTable extends React.Component {
	constructor(props) {
		super(props);
	}

	downloadOnClick(id) {
		var downloadUrl = this.props.downloadUrl + "?configId=" + id;
		this.getData(downloadUrl);
	}

	editOnClick(id) {
		
	}

	getData(downloadUrl) {
		var xhr = new XMLHttpRequest();
		
		xhr.open("get", downloadUrl, true);
		xhr.onload = function () {
			var data = JSON.parse(xhr.responseText);
			alert(data.result.name);
		}.bind(this);
		xhr.send();
	}

	render() {
		var headers = this.props.headers;
		var configs = this.props.configs;

		return <table className="table table-hover table-sm">
			<TableHeader headers={headers}/>
			<tbody>{
				configs.map((config) => {
					return <TableRow headers={headers} config={config}/>;
				})
			}
			</tbody>
		</table>;
	}
}
