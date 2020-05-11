using System;
using System.Collections.Generic;
using System.Text;

namespace ODCServices.Core.Interfaces.ConfigStorage
{
	public interface ICoreConfig
	{
		string Id { get; set; }
		string Name { get; set; }
		string Version { get; set; }
		string Created { get; set; }
	}
}
