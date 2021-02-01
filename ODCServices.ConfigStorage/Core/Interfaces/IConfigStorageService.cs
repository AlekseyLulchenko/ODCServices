using System;
using System.Collections.Generic;
using System.Text;
using ODCServices.ConfigStorage.Core.Models;

namespace ODCServices.ConfigStorage.Core.Interfaces
{
	public interface IConfigStorageService
	{
		IEnumerable<CoreConfig> GetConfigs();
		IEnumerable<CoreConfigProperty> GetAllProperties();
		void AddNewConfig(CoreConfig newConfig);
	}
}
