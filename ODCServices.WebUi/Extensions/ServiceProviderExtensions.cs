using Microsoft.Extensions.DependencyInjection;
using ODCServices.ConfigStorage;
using ODCServices.ConfigStorage.Core.Interfaces;
using ODCServices.PasswordObfuscator;
using ODCServices.PasswordObfuscator.Interfaces;
using ODCServices.PasswordObfuscator.PasswordObfuscator;

namespace ODCServices.WebUi.Extensions
{
	internal static class ServiceProviderExtensions
	{
		internal static void AddPasswordService(this IServiceCollection serviceCollection)
		{
			serviceCollection.AddTransient<IPasswordObfuscator, ExternalExePasswordPasswordObfuscator>();
			serviceCollection.AddTransient<IPasswordObfuscatorService, PasswordObfuscatorService>();
		}

		internal static void AddConfigStorageService(this IServiceCollection serviceCollection)
		{
			serviceCollection.AddTransient<IConfigStorageService, ConfigStorageService>();
		}
	}
}
