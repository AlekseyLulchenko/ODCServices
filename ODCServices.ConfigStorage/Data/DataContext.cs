
using Microsoft.EntityFrameworkCore;
using ODCServices.ConfigStorage.Data.Models;

namespace ODCServices.ConfigStorage.Data
{
	public sealed class DataContext : DbContext
	{
		public DbSet<DbConfig> Configs { get; set; }
		public DbSet<DbConfigProperty> ConfigProperties { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer("Data Source=ALULCHENKO\\LASQLSERVER;Initial Catalog=ConfigStorage;Integrated Security=True");
		}
	}
}
