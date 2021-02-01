using System;
using ODCServices.ConfigStorage.Core.Interfaces;

namespace ODCServices.ConfigStorage.Core.Models
{
	public class CoreConfig
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Version { get; set; }
		public DateTime Created { get; set; }
	}
}
