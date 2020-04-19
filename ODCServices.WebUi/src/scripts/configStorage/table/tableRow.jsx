import img_download from '../../../icons/download.svg';
import img_edit from '../../../icons/edit.svg';


export class TableRow extends React.Component {
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
		var configProperties = this.props.configProperties;
		return <tr key={config["id"]}>
			<th scope="row">{config.name}</th>
			<td>{config.version}</td>
			<td>{config.created}</td>
			<td>
				<button type="button" className="btn btn-link btn-sm" onClick={() => this.downloadOnClick(config.id)}><img src={img_download} /></button>
				<button type="button" className="btn btn-link btn-sm" onClick={() => this.editOnClick(config.id)}><img src={img_edit} /></button>
			</td>
			
		</tr>;
	}
}
