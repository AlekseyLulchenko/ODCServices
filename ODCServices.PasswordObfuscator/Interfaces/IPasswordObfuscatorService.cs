using System;
using System.Collections.Generic;
using System.Text;

namespace ODCServices.PasswordObfuscator.Interfaces
{
	public interface IPasswordObfuscatorService
	{
		string DeObfuscate(string obfuscatedPassword);
		string Obfuscate(string plainPassword);
	}
}
