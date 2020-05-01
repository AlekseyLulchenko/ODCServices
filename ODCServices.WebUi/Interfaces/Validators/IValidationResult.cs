using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ODCServices.WebUi.Interfaces.Validators
{
	public interface IValidationResult
	{
		bool IsValid { get; set; }
		List<string> ValidationErrors { get; set; }
	}
}
