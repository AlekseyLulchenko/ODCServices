using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ODCServices.ConfigStorage.Data.Models
{
	public class DbConfigProperty
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string DisplayName { get; set; }
		public string XmlPath { get; set; }
		public string Value { get; set; }
		public DbConfig Config { get; set; }
	}
}
