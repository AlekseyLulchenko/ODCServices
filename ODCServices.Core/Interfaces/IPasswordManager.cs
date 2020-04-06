using System;
using System.Collections.Generic;
using System.Text;

namespace ODCServices.Core.Interfaces
{
	public interface IPasswordManager
	{
		string DeObfuscate(string obfuscatedPassword);
		string Obfuscate(string plainPassword);
	}
}
