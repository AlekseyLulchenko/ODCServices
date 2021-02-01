using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using ODCServices.WebUi.Interfaces;

namespace ODCServices.WebUi.Models.ConfigStorage
{
	public class UiConfig
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Version { get; set; }
		public DateTime Created { get; set; }
		public IFormFile File { get; set; }

		public Dictionary<UiConfigProperty, string> XmlProperties { get; set; }
		public Dictionary<UiConfigProperty, string> BuiltInProperties { get; set; }

		public static readonly List<string> BuiltInPropertiesList;

		static UiConfig()
		{
			BuiltInPropertiesList = new List<string>
			{
				nameof(Id),
				nameof(Name), 
				nameof(Version), 
				nameof(Created)
			};
		}

		public UiConfig()
		{
			XmlProperties = new Dictionary<UiConfigProperty, string>();

			BuiltInProperties = new Dictionary<UiConfigProperty, string>
			{
				{ new UiConfigProperty {Id = nameof(Id), DisplayName = nameof(Id), XmlPath = ""}, Id.ToString() },
				{ new UiConfigProperty {Id = nameof(Name), DisplayName = nameof(Name), XmlPath = ""}, Name },
				{ new UiConfigProperty {Id = nameof(Version), DisplayName = nameof(Version), XmlPath = ""}, Version },
				{ new UiConfigProperty {Id = nameof(Created), DisplayName = nameof(Created), XmlPath = ""}, Created.ToString() }
			};
		}

		public Dictionary<UiConfigProperty, string> GetAllProperties()
		{
			Dictionary<UiConfigProperty, string> result = new Dictionary<UiConfigProperty, string>(BuiltInProperties);

			foreach (KeyValuePair<UiConfigProperty, string> property in XmlProperties)
			{
				result.Add(property.Key, property.Value);
			}

			return result;
		}
	}
}
