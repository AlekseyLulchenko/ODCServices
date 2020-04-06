using ODCServices.Core;
using ODCServices.Core.Interfaces;
using ODCServices.WebUi.Interfaces.Services;

namespace ODCServices.WebUi.Services
{
	internal class PasswordsService : IPasswordsService
	{
		private readonly IPasswordManager _passwordManager;

		public PasswordsService(IPasswordManager passwordManager)
		{
			_passwordManager = passwordManager;
		}

		public string ObfuscatePassword(string plainPassword)
		{
			return _passwordManager.Obfuscate(plainPassword);
		}

		public string DeObfuscatePassword(string obfuscatedPassword)
		{
			return _passwordManager.DeObfuscate(obfuscatedPassword);
		}
	}
}
