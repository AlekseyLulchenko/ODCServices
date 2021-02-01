using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ODCServices.ConfigStorage.Data.Models
{
	public class DbConfig
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Version { get; set; }
		public DateTime Created { get; set; }

		public List<DbConfigProperty> Properties { get; set; }

	}
}
