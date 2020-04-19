﻿using System;
using System.Collections.Generic;
using System.Linq;
using ODCServices.Core.Interfaces.ConfigStorage;
using ODCServices.WebUi.Interfaces.Services;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Services
{
	public class ConfigStorageService : IConfigStorageService
	{
		private IConfigStorageManager _configStorageManager;
		private List<UiConfigProperty> _allProperties;
		public ConfigStorageService(IConfigStorageManager configStorageManager)
		{
			_configStorageManager = configStorageManager;
			_allProperties = new List<UiConfigProperty>
			{
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "OLSSAdmin", XmlPath = "Config.OLSS.AdminName" },
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "OLSSAdminPassword", XmlPath = "Config.OLSS.AdminPswd" },
				new UiConfigProperty{ Id = Guid.NewGuid().ToString(), DisplayName = "CMAdminPassword", XmlPath = "Config.CM.AdminPswd" },
			};
		}

		public List<UiConfig> GetConfigs()
		{
			//ICoreConfig coreConfigs = _configStorageManager.GetAllConfigs();

			List<UiConfig> configs = new List<UiConfig>
			{
				new UiConfig 
				{ 
					Id = "id-1",
					Name = "OpenLab Server", 
					Created = DateTime.Now.ToString("d MMM yyyy"), 
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
					Created = DateTime.Now.ToString("d MMM yyyy"),
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
					Created = DateTime.Now.ToString("d MMM yyyy"),
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
					Created = DateTime.Now.ToString("d MMM yyyy"),
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
					Created = DateTime.Now.ToString("d MMM yyyy"),
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
					Created = DateTime.Now.ToString("d MMM yyyy"),
					Version = "2.5",
					Properties = new Dictionary<UiConfigProperty, string>(new List<KeyValuePair<UiConfigProperty, string>>
					{
						new KeyValuePair<UiConfigProperty, string>(_allProperties[0], "OLSSAdmin Value 6"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[1], "OLSSAdminPassword Value 6"),
						new KeyValuePair<UiConfigProperty, string>(_allProperties[2], "CMAdminPassword Value 6"),
					})
				}
			};
			return configs;
		}

		public List<UiConfigProperty> GetAllProperties()
		{
			return _allProperties;
		}
	}
}
