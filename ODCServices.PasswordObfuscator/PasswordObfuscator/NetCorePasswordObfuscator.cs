using System;
using System.Diagnostics;
using System.Text;
using ODCServices.PasswordObfuscator.Interfaces;

namespace ODCServices.PasswordObfuscator.PasswordObfuscator
{
	public class NetCorePasswordObfuscator : IPasswordObfuscator
	{
		private const int saltLength = 3;
		
		private Cryptor _cryptor = new Cryptor();

		public string Obfuscate(string plainPassword)
		{
			if (plainPassword == null)
			{
				return null;
			}

			string stringToEncrypt = plainPassword + GetSalt();

			byte[] bytes = Encoding.UTF8.GetBytes(stringToEncrypt);

			return Convert.ToBase64String(_cryptor.Encrypt(bytes));
		}

		public string DeObfuscate(string obfuscatedPassword)
		{
			if (obfuscatedPassword == null)
			{
				return null;
			}

			if (obfuscatedPassword.ToLower().StartsWith("plain-password:"))
			{
				return obfuscatedPassword.Substring(obfuscatedPassword.IndexOf(':') + 1);
			}
			byte[] input = Convert.FromBase64String(obfuscatedPassword);

			string @string = Encoding.UTF8.GetString(_cryptor.Decrypt(input));

			return @string.Substring(0, @string.Length - saltLength);
		}

		private string GetSalt()
		{
			string salt = Stopwatch.GetTimestamp().ToString();
			salt = salt.Substring(salt.Length - saltLength, saltLength);
			return salt;
		}
	}
}
