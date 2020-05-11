using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ODCServices.Core.Interfaces.ConfigStorage;
using ODCServices.Core.Models;
using ODCServices.Data;
using ODCServices.Data.Models;

namespace ODCServices.Core
{
	public class ConfigStorageManager : IConfigStorageManager
	{
		public IEnumerable<ICoreConfig> GetAllConfigs()
		{
			using (DataContext db = new DataContext())
			{
				return db.Configs.Select(dbConfig => new CoreConfig
					{
						Created = dbConfig.Created,
						Id = dbConfig.Id,
						Name = dbConfig.Name,
						Version = dbConfig.Version
					}).ToList();
			}
		}

		public void AddConfig(ICoreConfig newConfig)
		{
			using (DataContext db = new DataContext())
			{
				db.Configs.Add(new DbConfig
					{
						Created = newConfig.Created,
						Id = newConfig.Id,
						Name = newConfig.Name,
						Version = newConfig.Version
					});
				db.SaveChanges();
			}
		}
	}
}
