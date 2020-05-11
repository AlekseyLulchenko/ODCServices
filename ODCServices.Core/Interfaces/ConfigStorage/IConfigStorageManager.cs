using System.Collections.Generic;

namespace ODCServices.Core.Interfaces.ConfigStorage
{
	public interface IConfigStorageManager
	{
		IEnumerable<ICoreConfig> GetAllConfigs();
		void AddConfig(ICoreConfig newConfig);
	}
}
