using System.Collections.Generic;
using System.Linq;

namespace ODCServices.WebUi.Models.ConfigStorage
{
	public class UiConfig
	{
		public string Id { get; set; }
		public string Name { get; set; }
		public string Version { get; set; }
		public string Created { get; set; }

		public Dictionary<UiConfigProperty, string> Properties = new Dictionary<UiConfigProperty, string>();

		public Dictionary<UiConfigProperty, string> GetAllProperties()
		{
			Dictionary<UiConfigProperty, string> result = new Dictionary<UiConfigProperty, string>
			{
				{
					new UiConfigProperty {Id = nameof(Name), DisplayName = nameof(Name), XmlPath = ""}, 
					Name
				},
				{
					new UiConfigProperty {Id = nameof(Version), DisplayName = nameof(Version), XmlPath = ""},
					Version
				},
				{
					new UiConfigProperty {Id = nameof(Created), DisplayName = nameof(Created), XmlPath = ""},
					Created
				}
			};

			foreach (KeyValuePair<UiConfigProperty, string> property in Properties)
			{
				result.Add(property.Key, property.Value);
			}

			return result;
		}
	}
}
