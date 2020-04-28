export class NewConfigModal extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		if (this.props.visible === true) {
			$('#newConfigModal').modal('toggle');
		}
	}

	render() {
			return <div className="modal fade" id="newConfigModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				       <div className="modal-dialog" role="document">
					       <div className="modal-content">
						       <div className="modal-header">
							       <h5 className="modal-title" id="exampleModalLabel">Add new config</h5>
							       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
								       <span aria-hidden="true">&times;</span>
							       </button>
						       </div>
						       <div className="modal-body">
							       <form>
								       <div className="form-group">
									       <label htmlFor="config-name" className="col-form-label">Display name:</label>
											<input type="text" className="form-control" id="config-name"/>
								       </div>

								       <div className="form-group">
									       <label htmlFor="config-version" className="col-form-label">Product version:</label>
											<input type="text" className="form-control" id="config-version"></input>
										</div>
								       <div className="form-group">
									       <label htmlFor="config" className="col-form-label">Select a file:</label>
											<input type="file" className="form-control-file" id="config"/>
								       </div>
							       </form>
						       </div>
						       <div className="modal-footer">
							       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							       <button type="button" className="btn btn-primary">Save</button>
						       </div>
					       </div>
				       </div>
			       </div>;
	}
}