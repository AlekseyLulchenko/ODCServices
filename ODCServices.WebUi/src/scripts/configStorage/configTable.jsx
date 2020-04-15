export class ConfigTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <table className="table table-hover table-sm">
			<thead>
				<tr>
				 <th scope="col">Name</th>
				 <th scope="col">Version</th>
				 <th scope="col">Created</th>
				 <th scope="col">Download</th>
				</tr>
			</thead >
			<tbody>{
				this.props.configs.map(function (config, index) {
					return <tr key={index}>
						<th scope="row">{config.name}</th>
						<td>{config.version}</td>
						<td>{config.created}</td>
						<td><button type="button" className="btn btn-link btn-sm">Download</button></td>
					</tr>;
				})
			}
			</tbody>
		</table>;
	}
}
