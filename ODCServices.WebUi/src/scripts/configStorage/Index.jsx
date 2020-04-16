import { ConfigStoragePage } from "./configStoragePage";
var getAllUrl = "ConfigStorage/GetAll";
var downloadUrl = "ConfigStorage/Download";

ReactDOM.render(
	<ConfigStoragePage
		getAllUrl={getAllUrl}
		downloadUrl={downloadUrl} />,

	document.getElementById("configStorageAppContainer")
);