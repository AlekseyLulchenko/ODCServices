using System;
using System.Collections.Generic;
using System.Text;

namespace ODCServices.Core.Interfaces
{
	public interface IObfuscator
	{
		string Obfuscate(string plainPassword);
		string DeObfuscate(string obfuscatedPassword);
	}
}
