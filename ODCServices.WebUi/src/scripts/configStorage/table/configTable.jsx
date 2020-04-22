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

	appendColumnWidth(header) {
		const configs = this.props.configs;
		let maxSymbolsInString = 1;
		const pixelsForASymbol = 10;

		for (var i = 0; i < configs.length; i++) {
			const config = configs[i];
			const currentProperty = config.properties.find(p => p.propId === header.id);

			if (currentProperty != undefined){
				const propLength = currentProperty.propValue.length;
				maxSymbolsInString = propLength > maxSymbolsInString ? propLength : maxSymbolsInString;
			}
		}
		const columnMinWidthPx = maxSymbolsInString * pixelsForASymbol;
		return {
			id: header.id,
			name: header.name,
			columnMinWidthPx: columnMinWidthPx
		}
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
		const actionColumn = { id: "Action", name: "Action", columnMinWidthPx: "100" };
		var headers = this.props.headers.map(header => this.appendColumnWidth(header)).concat(actionColumn);
		var configs = this.props.configs;

		return <div className="table-responsive">
			       <table className="table table-hover table-sm">
						<TableHeader headers={headers}/>
				       <tbody>{
					       configs.map((config) => {
							   return <TableRow headers={this.props.headers} config={config} downloadUrl={this.props.downloadUrl}/>;
					       })
				       }
				       </tbody>
			       </table>
		       </div>;
	}
}
