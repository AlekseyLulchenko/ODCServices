using ODCServices.Core.Interfaces.Passwords;

namespace ODCServices.Core
{
	public class PasswordManager : IPasswordManager
	{
		private readonly IObfuscator _obfuscator;

		public PasswordManager(IObfuscator obfuscator)
		{
			_obfuscator = obfuscator;
		}

		public string Obfuscate(string plainPassword)
		{
			return _obfuscator.Obfuscate(plainPassword);
		}

		public string DeObfuscate(string obfuscatedPassword)
		{
			return _obfuscator.DeObfuscate(obfuscatedPassword);
		}
	}
}
