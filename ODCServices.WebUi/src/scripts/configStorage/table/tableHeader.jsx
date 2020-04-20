export class TableHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var headers = this.props.headers;
		return <thead>
			<tr>
				{
					headers.map((header) => {
						return <th key={header.id} scope="col">{header.name}</th>;
					})
				}
			</tr>
		</thead >;
	}
}
