using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
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
		private readonly List<UiConfigProperty> _allProperties;
		private readonly List<UiConfig> _allConfigs;
		private const string DATETIME_FORMAT = "d MMM yyyy";

		public ConfigStorageService(IConfigStorageManager configStorageManager)
		{
			_configStorageManager = configStorageManager;

			_allProperties = new List<UiConfigProperty>
			{
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "OLSSAdmin", XmlPath = "Config.OLSS.AdminName" },
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "OLSSAdminPassword", XmlPath = "Config.OLSS.AdminPswd" },
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "CMAdminPassword", XmlPath = "Config.CM.AdminPswd" },
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "New unexpected property", XmlPath = "New.unexpected.property" },
			};

			_allConfigs = new List<UiConfig>
			{
				new UiConfig
				{
					Id = "id-1",
					Name = "OpenLab Server",
					Created = DateTime.Now.ToString(DATETIME_FORMAT),
					Version = "2.3",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
						{
							new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 1"),
							new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 1"),
							new KeyValuePair<UiConfigProperty, string>(_allProperties[2], "CMAdminPassword Value 1"),
						})
				},
				new UiConfig
				{
					Id = "id-2",
					Name = "OpenLab Server",
					Created = DateTime.Now.ToString(DATETIME_FORMAT),
					Version = "2.4",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
					{
						new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 2"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 2"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[2], "CMAdminPassword Value 2"),
					})
				},
				new UiConfig
				{
					Id = "id-3",
					Name = "OpenLab Server",
					Created = DateTime.Now.ToString(DATETIME_FORMAT),
					Version = "2.5",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
					{
						new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 3"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 3"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[2], "CMAdminPassword Value 3"),
					})
				},
				new UiConfig
				{
					Id = "id-4",
					Name = "OpenLab Client",
					Created = DateTime.Now.ToString(DATETIME_FORMAT),
					Version = "2.3",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
					{
						new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 4"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 4"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[2], "CMAdminPassword Value 4"),
					})
				},
				new UiConfig
				{
					Id = "id-5",
					Name = "OpenLab Client",
					Created = DateTime.Now.ToString(DATETIME_FORMAT),
					Version = "2.4",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
					{
						new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 5"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 5"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[2], "CMAdminPassword Value 5"),
					})
				},
				new UiConfig
				{
					Id = "id-3",
					Name = "OpenLab Client",
					Created = DateTime.Now.ToString(DATETIME_FORMAT),
					Version = "2.5",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
					{
						new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 6"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 6"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[3], "Value 6"),
					})
				}
			};
		}

		public List<UiConfig> GetConfigs()
		{
			return _allConfigs;
		}

		public List<UiConfigProperty> GetAllProperties()
		{
			return _allProperties;
		}

		public void AddNewConfig(UiConfig newConfig)
		{
			newConfig.Id = Guid.NewGuid().ToString();
			newConfig.Created = DateTime.Now.ToString(DATETIME_FORMAT);
			_configStorageManager.AddConfig(new CoreConfig
			{
				Created = newConfig.Created,
				Id = newConfig.Id,
				Name = newConfig.Name,
				Version = newConfig.Version
			});
		}

		public IValidationResult ValidateConfig(UiConfig uiConfig)
		{
			IConfigValidator configValidator = new ConfigValidator();
			return configValidator.IsValid(uiConfig);
		}
	}
}
