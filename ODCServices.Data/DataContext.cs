using System;
using Microsoft.EntityFrameworkCore;
using ODCServices.Data.Models;

namespace ODCServices.Data
{
	public sealed class DataContext : DbContext
	{
		public DbSet<DbConfig> Configs { get; set; }
		public DataContext()
		{
			Database.EnsureCreated();
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer("Data Source=ALULCHENKO\\LASQLSERVER;Initial Catalog=ODCServices;Integrated Security=True");
		}
	}
}
