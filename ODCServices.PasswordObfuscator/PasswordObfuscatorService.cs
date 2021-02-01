using ODCServices.PasswordObfuscator.Interfaces;

namespace ODCServices.PasswordObfuscator
{
	public class PasswordObfuscatorService : IPasswordObfuscatorService
	{
		private readonly IPasswordObfuscator _obfuscator;

		public PasswordObfuscatorService(IPasswordObfuscator obfuscator)
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
