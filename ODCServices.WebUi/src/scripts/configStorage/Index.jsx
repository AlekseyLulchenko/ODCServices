import { ConfigStoragePage } from "./configStoragePage";
const getAllUrl = "ConfigStorage/GetAll";
const downloadUrl = "ConfigStorage/Download";
const addNewConfigUrl = "ConfigStorage/AddNew";

ReactDOM.render(
	<ConfigStoragePage
		getAllUrl={getAllUrl}
		downloadUrl={downloadUrl}
		addNewConfigUrl={addNewConfigUrl}/>,

	document.getElementById("configStorageAppContainer")
);