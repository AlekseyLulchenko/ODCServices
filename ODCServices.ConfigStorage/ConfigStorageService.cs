using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ODCServices.ConfigStorage.Core.Interfaces;
using ODCServices.ConfigStorage.Core.Models;
using ODCServices.ConfigStorage.Data;
using ODCServices.ConfigStorage.Data.Models;

namespace ODCServices.ConfigStorage
{
	public class ConfigStorageService : IConfigStorageService
	{
		private readonly IMapper _mapper;

		public ConfigStorageService(IMapper mapper)
		{
			_mapper = mapper;
		}

		public IEnumerable<CoreConfig> GetConfigs()
		{
			using (DataContext db = new DataContext())
			{
				return db.Configs.AsNoTracking().Select(dbConfig => _mapper.Map<CoreConfig>(dbConfig)).ToList();
			}
		}

		public IEnumerable<CoreConfigProperty> GetAllProperties()
		{
			return new List<CoreConfigProperty>();
		}

		public void AddNewConfig(CoreConfig newConfig)
		{
			using (DataContext db = new DataContext())
			{
				db.Configs.Add(_mapper.Map<DbConfig>(newConfig));
				db.SaveChanges();
			}
		}
	}
}
