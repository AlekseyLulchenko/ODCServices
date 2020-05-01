export class NewConfigModal extends React.Component{
	constructor(props) {
		super(props);
		this.newConfig = {
			name: "",
			version: "",
			file: ""
		};
	}

	postData(url, data, callBack) {
		var xhr = new XMLHttpRequest();

		var formData = new FormData();
		formData.append('name', data.name);
		formData.append('version', data.version);
		formData.append('config', data.file);

		xhr.open("POST", url, true);

		xhr.onload = function () {
			const response = JSON.parse(xhr.responseText);
			callBack(response);
		}.bind(this);
		xhr.send(formData);
	}

	componentDidUpdate() {
		if (this.props.visible === true) {
			$('#newConfigModal').modal('toggle');
			$('#config-name')[0].value = "";
			$('#config-version')[0].value = "";
			$('#config')[0].value = "";
		}
	}

	onNameChange(e) {
		this.newConfig.name = e.target.value;
	}

	onVersionChange(e) {
		this.newConfig.version = e.target.value;
	}

	onConfigChoose(e) {
		this.newConfig.file = e.target.files[0];
	}

	onSaveClick() {
		const addNewUrl = this.props.addNewUrl;

		this.postData(addNewUrl, this.newConfig, (response) => {
			alert(response.result);
		});
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
											<input type="text" className="form-control" id="config-name" onChange={(e) => this.onNameChange(e)}/>
								       </div>
								       <div className="form-group">
									       <label htmlFor="config-version" className="col-form-label">Product version:</label>
											<input type="text" className="form-control" id="config-version" onChange={(e) => this.onVersionChange(e)}/>
										</div>
								       <div className="form-group">
									       <label htmlFor="config" className="col-form-label">Select a file:</label>
											<input type="file" className="form-control-file" id="config" onChange={(e) => this.onConfigChoose(e)}/>
								       </div>
							       </form>
						       </div>
						       <div className="modal-footer">
							       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							       <button type="button" className="btn btn-primary" onClick={() => this.onSaveClick()}>Save</button>
						       </div>
					       </div>
				       </div>
			       </div>;
	}
}