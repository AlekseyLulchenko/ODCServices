import img_download from '../../../icons/download.svg';
import img_edit from '../../../icons/edit.svg';

export class TableRow extends React.Component {
	constructor(props) {
		super(props);
	}

	downloadOnClick(id) {
		const downloadUrl = this.props.downloadUrl + "?configId=" + id;
		this.getData(downloadUrl);
	}

	editOnClick(id) {
		
	}

	getData(downloadUrl) {
		var xhr = new XMLHttpRequest();
		
		xhr.open("get", downloadUrl, true);
		xhr.onload = function () {
			const data = JSON.parse(xhr.responseText);
			alert(data.result.name);
		}.bind(this);
		xhr.send();
	}

	render() {
		const config = this.props.config;
		const configId = config.configId;
		const headers = this.props.headers;
		const properties = config.properties;

		return <tr key={configId}>{
			headers.map((header) => {
				var property = properties.find(p => p.propId === header.id);
				if (property != undefined) {
					return (header.id === "Name") ? <th scope="row" className="text-center">{property.propValue}</th> : <td className= "text-center">{property.propValue}</td>;
				} else {
					return <td className="text-center">-</td>;
				}
			})
		}
			<td className="text-center">
				<div>
					<button type="button" className="btn btn-link btn-sm" onClick={() => this.downloadOnClick(configId)}><img src={img_download} /></button>
					<button type="button" className="btn btn-link btn-sm" onClick={() => this.editOnClick(configId)}><img src={img_edit} /></button>
				</div>
			</td>
		</tr>;
	}
}

