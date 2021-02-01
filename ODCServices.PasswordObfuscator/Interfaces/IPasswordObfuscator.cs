using System;
using System.Collections.Generic;
using System.Text;

namespace ODCServices.PasswordObfuscator.Interfaces
{
	public interface IPasswordObfuscator
	{
		string Obfuscate(string plainPassword);
		string DeObfuscate(string obfuscatedPassword);
	}
}
