using System;
using System.Collections.Generic;

namespace ODCServices.WebUi.Models.ConfigStorage
{
	public class UiConfig
	{
		public string Id { get; set; }

		public string Name { get; set; }
		public string Version { get; set; }
		public string Created { get; set; }

		public List<UiConfigProperty> Properties = new List<UiConfigProperty>();

		public List<UiConfigProperty> GetAllProperties()
		{
			List<UiConfigProperty> ownProperties = new List<UiConfigProperty>
			{
				new UiConfigProperty { DisplayName = "Id", Value = Id, XmlPath = "" },
				new UiConfigProperty { DisplayName = "Name", Value = Name, XmlPath = "" },
				new UiConfigProperty { DisplayName = "Version", Value = Version, XmlPath = "" },
				new UiConfigProperty { DisplayName = "Created", Value = Created, XmlPath = "" }
			};

			List<UiConfigProperty> resultList = new List<UiConfigProperty>();
			ownProperties.ForEach(p => resultList.Add(p));
			Properties.ForEach(p => resultList.Add(p));
			return resultList;
		}

		public void AddProperty(UiConfigProperty property)
		{
			if (property == null)
			{
				throw new ArgumentNullException(nameof(property));
			}

			Properties.Add(property);
		}
	}
}
