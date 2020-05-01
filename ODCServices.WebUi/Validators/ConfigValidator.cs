using System.Collections.Generic;
using System.Linq;
using ODCServices.WebUi.Interfaces.Validators;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Validators
{
	public class ConfigValidator : IConfigValidator
	{
		public IValidationResult IsValid(UiConfig uiConfig)
		{
			if (uiConfig == null)
			{
				return new ConfigValidationResult
				{
					IsValid = false,
					ValidationErrors = new List<string> { "Config is not found." }
				};
			}
			List<string> results = new List<string>
			{
				ValidatePropertyForNullOrEmpty(nameof(uiConfig.Name), uiConfig.Name),
				ValidatePropertyForNullOrEmpty(nameof(uiConfig.Version), uiConfig.Version)
			};

			return new ConfigValidationResult
			{
				IsValid = results.Count(r => r !=null) == 0,
				ValidationErrors = results.Where(result => result != null).ToList()
			};

		}

		private string ValidatePropertyForNullOrEmpty(string name, string value)
		{
			return string.IsNullOrWhiteSpace(value) ? $"{name} is empty." : null;
		}


	}
}
