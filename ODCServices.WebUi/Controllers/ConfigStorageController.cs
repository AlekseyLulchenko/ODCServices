using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ODCServices.WebUi.Interfaces.Services;
using ODCServices.WebUi.Interfaces.Validators;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Controllers
{
    public class ConfigStorageController : Controller
    {
	    //private readonly IConfigStorageService _configStorageService;

	    public ConfigStorageController(/*IConfigStorageService configStorageService*/)
	    {
		    //_configStorageService = configStorageService;
	    }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetAll([FromServices] IConfigStorageService configStorageService)
        {
			List<string> ownPropNames = new List<string>
			{
				nameof(UiConfig.Id), 
				nameof(UiConfig.Name), 
				nameof(UiConfig.Version), 
				nameof(UiConfig.Created)
			};

	        return Json(new
	        {
				builtInHeaders = ownPropNames
					.Select(item => new { id = item, name = item })
					.Where(p => p.id != nameof(UiConfig.Id))
					.ToList(),
				headers = configStorageService
					.GetAllProperties()
					.Select(prop => new
						{
							id = prop.Id, 
							name = prop.DisplayName
						})
					.ToList(),

				configs = configStorageService
					.GetConfigs()
					.Select(config => new
						{
							configId = config.Id,
							properties = config
								.GetAllProperties()
								.Select(p => new { propId = p.Key.Id, propValue = p.Value })
								.ToList()
						})
					.ToList()
			});
        }

		public IActionResult Download([FromServices] IConfigStorageService configStorageService, string configId)
        {
	        return Json(new
	        {
		        result = configStorageService.GetConfigs().FirstOrDefault(c => c.Id == configId)
	        });
        }

		[HttpPost]
		public IActionResult AddNew([FromServices] IConfigStorageService configStorageService, UiConfig newConfig)
		{
			IValidationResult configValidationResult = configStorageService.ValidateConfig(newConfig);
			string jsonResult = "";
			if (configValidationResult.IsValid)
			{
				configStorageService.AddNewConfig(newConfig);
				jsonResult = "success";
			}
			else
			{
				jsonResult = string.Join(" ", configValidationResult.ValidationErrors);
			}

			return Json(new { result = jsonResult });
		}

    }
}