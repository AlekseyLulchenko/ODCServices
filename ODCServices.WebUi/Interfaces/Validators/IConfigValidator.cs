using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Interfaces.Validators
{
	public interface IConfigValidator
	{
		IValidationResult IsValid(UiConfig uiConfig);
	}
}
