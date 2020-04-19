using Microsoft.Extensions.DependencyInjection;
using ODCServices.Core;
using ODCServices.Core.Interfaces.ConfigStorage;
using ODCServices.Core.Interfaces.Passwords;
using ODCServices.Core.PasswordObfuscator;
using ODCServices.WebUi.Interfaces.Services;
using ODCServices.WebUi.Services;

namespace ODCServices.WebUi.Extensions
{
	internal static class ServiceProviderExtensions
	{
		internal static void AddPasswordsService(this IServiceCollection serviceCollection)
		{
			serviceCollection.AddScoped<IObfuscator, ExternalExePasswordObfuscator>();
			serviceCollection.AddScoped<IPasswordManager, PasswordManager>();
			serviceCollection.AddScoped<IPasswordsService, PasswordsService>();
		}

		internal static void AddConfigStorageService(this IServiceCollection serviceCollection)
		{
			serviceCollection.AddScoped<IConfigStorageManager, ConfigStorageManager>();
			serviceCollection.AddScoped<IConfigStorageService, ConfigStorageService>();
		}
	}
}
