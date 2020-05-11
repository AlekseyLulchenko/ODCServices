using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using ODCServices.Core.Interfaces.ConfigStorage;
using ODCServices.Core.Models;
using ODCServices.Data;
using ODCServices.Data.Models;

namespace ODCServices.Core
{
	public class ConfigStorageManager : IConfigStorageManager
	{
		private readonly IMapper _mapper;

		public ConfigStorageManager(IMapper mapper)
		{
			_mapper = mapper;
		}

		public IEnumerable<ICoreConfig> GetAllConfigs()
		{
			using (DataContext db = new DataContext())
			{
				return db.Configs.Select(dbConfig => _mapper.Map<ICoreConfig>(dbConfig)).ToList();
			}
		}

		public void AddConfig(ICoreConfig newConfig)
		{
			using (DataContext db = new DataContext())
			{
				db.Configs.Add(_mapper.Map<DbConfig>(newConfig));
				db.SaveChanges();
			}
		}
	}
}
