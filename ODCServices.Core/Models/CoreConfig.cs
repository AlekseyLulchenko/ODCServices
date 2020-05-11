using System;
using System.Collections.Generic;
using System.Text;
using ODCServices.Core.Interfaces.ConfigStorage;

namespace ODCServices.Core.Models
{
	public class CoreConfig : ICoreConfig
	{
		public string Id { get; set; }
		public string Name { get; set; }
		public string Version { get; set; }
		public string Created { get; set; }
	}
}
