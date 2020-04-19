export class TableHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var headers = this.props;
		return <thead>
			<tr>
				{
					headers.map((header) => {
						return <th scope="col">{header.displayName}</th>;
					})
				}
			</tr>
		</thead >;
	}
}
