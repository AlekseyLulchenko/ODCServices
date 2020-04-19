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
		var configs = this.props.configs;

		return <table className="table table-hover table-sm">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Version</th>
					<th scope="col">Created</th>
					<th scope="col">Action</th>
				</tr>
			</thead >
			<tbody>{
				configs.map((config) => {
					return <tr key={config["id"]}>
						<th scope="row">{config.name}</th>
						<td>{config.version}</td>
						<td>{config.created}</td>
						<td>
							<button type="button" className="btn btn-link btn-sm" onClick={() => this.downloadOnClick(config.id)}><img src={img_download} /></button>
							<button type="button" className="btn btn-link btn-sm" onClick={() => this.editOnClick(config.id)}><img src={img_edit} /></button>
						</td>
						
					</tr>;
				})
			}
			</tbody>
		</table>;
	}
}
