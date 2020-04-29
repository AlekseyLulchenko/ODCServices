using System.Collections.Generic;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Interfaces.Services
{
	public interface IConfigStorageService
	{
		List<UiConfig> GetConfigs();
		List<UiConfigProperty> GetAllProperties();
		void AddNewConfig(UiConfig newConfig);
	}
}
