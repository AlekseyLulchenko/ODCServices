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
						const minWidth = header.columnMinWidthPx;
						return <th key={header.id} className="text-center" scope="col" style={{ minWidth: minWidth + 'px' }}>{header.name}</th>;
					})
				}
			</tr>
		</thead >;
	}
}
