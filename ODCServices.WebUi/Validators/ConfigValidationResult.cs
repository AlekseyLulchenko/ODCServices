using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ODCServices.WebUi.Interfaces.Validators;

namespace ODCServices.WebUi.Validators
{
	public class ConfigValidationResult : IValidationResult
	{
		public bool IsValid { get; set; }
		public List<string> ValidationErrors { get; set; }

		public ConfigValidationResult()
		{
			ValidationErrors = new List<string>();
		}
	}
}
