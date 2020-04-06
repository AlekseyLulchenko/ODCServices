using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ODCServices.WebUi.Interfaces.Services;
using ODCServices.WebUi.Models;

namespace ODCServices.WebUi.Controllers
{
	public class ODCServicesController : Controller
	{
		private readonly IPasswordsService _passwordsService;

		public ODCServicesController(IPasswordsService passwordsService)
		{
			_passwordsService = passwordsService;
		}

		public IActionResult Index()
		{
			return View();
		}

		public IActionResult PasswordDecorder()
		{
			return View();
		}

		public IActionResult Obfuscate(string plainPassword)
		{
			string obfuscatedPassword = "";
			try
			{
				obfuscatedPassword = _passwordsService.ObfuscatePassword(plainPassword);
			}
			catch (Exception)
			{
				return Json(new { result = "Error. Check the source string and try again." });
			}
			return Json(new { result = obfuscatedPassword });
		}

		public IActionResult DeObfuscate(string obfuscatedPassword)
		{
			string plainPassword = "";
			try
			{
				plainPassword = _passwordsService.DeObfuscatePassword(obfuscatedPassword);
			}
			catch (Exception)
			{
				return Json(new { result = "Error. Check the source string and try again." });
			}
			return Json(new { result = plainPassword });
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
