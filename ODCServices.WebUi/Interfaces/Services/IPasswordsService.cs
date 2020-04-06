﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ODCServices.WebUi.Interfaces.Services
{
	public interface IPasswordsService
	{
		string ObfuscatePassword(string plainPassword);
		string DeObfuscatePassword(string obfuscatedPassword);
	}
}