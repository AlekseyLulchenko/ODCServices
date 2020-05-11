using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using AutoMapper;
using ODCServices.Core.Interfaces.ConfigStorage;
using ODCServices.Core.Models;
using ODCServices.WebUi.Interfaces.Services;
using ODCServices.WebUi.Interfaces.Validators;
using ODCServices.WebUi.Models.ConfigStorage;
using ODCServices.WebUi.Validators;

namespace ODCServices.WebUi.Services
{
	public class ConfigStorageService : IConfigStorageService
	{
		private IConfigStorageManager _configStorageManager;
		private readonly IMapper _mapper;

		private const string DATETIME_FORMAT = "d MMM yyyy";

		public ConfigStorageService(IConfigStorageManager configStorageManager, IMapper mapper)
		{
			_mapper = mapper;
			_configStorageManager = configStorageManager;
		}

		public List<UiConfig> GetConfigs()
		{
			return new List<UiConfig>();
		}

		public List<UiConfigProperty> GetAllProperties()
		{
			return new List<UiConfigProperty>();
		}

		public void AddNewConfig(UiConfig newConfig)
		{
			newConfig.Id = Guid.NewGuid().ToString();
			newConfig.Created = DateTime.Now.ToString(DATETIME_FORMAT);
			_configStorageManager.AddConfig(_mapper.Map<CoreConfig>(newConfig));
		}

		public IValidationResult ValidateConfig(UiConfig uiConfig)
		{
			IConfigValidator configValidator = new ConfigValidator();
			return configValidator.IsValid(uiConfig);
		}
	}
}
