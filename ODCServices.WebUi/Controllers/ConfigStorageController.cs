using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ODCServices.WebUi.Interfaces.Services;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Controllers
{
    public class ConfigStorageController : Controller
    {
	    private List<UiConfig> _configs;
	    private readonly IConfigStorageService _configStorageService;

	    public ConfigStorageController(IConfigStorageService configStorageService)
	    {
		    _configStorageService = configStorageService;
	    }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetAll()
        {
			List<string> ownPropNames = new List<string>{ "id", "name", "version", "created" };

	        return Json(new
	        {
				builtInHeaders = ownPropNames
					.Select(item => new { id = item, name = item })
					.ToList(),
				headers = _configStorageService
					.GetAllProperties()
					.Select(prop => new
						{
							id = prop.Id, 
							name = prop.DisplayName
						})
					.ToList(),

				configs = _configStorageService
					.GetConfigs()
					.Select(config => new
						{
							configId = config.Id,
							properties = config.GetAllProperties().Select(p => new { propId = p.Key.Id, propValue = p.Value }).ToList()
						})
					.ToList()
			});
        }

		public IActionResult Download(string configId)
        {
	        return Json(new
	        {
		        result = _configs.FirstOrDefault(c => c.Id == configId)
	        });
        }
    }
}