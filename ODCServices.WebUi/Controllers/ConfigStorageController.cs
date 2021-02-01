using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ODCServices.ConfigStorage.Core.Interfaces;
using ODCServices.ConfigStorage.Core.Models;
using ODCServices.WebUi.Interfaces.Validators;
using ODCServices.WebUi.Models.ConfigStorage;
using ODCServices.WebUi.Validators;

namespace ODCServices.WebUi.Controllers
{
    public class ConfigStorageController : Controller
    {
		private readonly IConfigStorageService _configStorageService;

		private const string DATETIME_FORMAT = "d MMM yyyy";
		private readonly IMapper _mapper;

		public ConfigStorageController(IConfigStorageService configStorageService, IMapper mapper)
		{
			_mapper = mapper;
			_configStorageService = configStorageService;
		}

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetAll()
        {
	        return Json(new
	        {
				builtInHeaders = UiConfig.BuiltInPropertiesList
					.Where(p => p != nameof(UiConfig.Id))
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
					.Select(coreConfig => _mapper.Map<UiConfig>(coreConfig))
					.Select(uiConfig => new
						{
							configId = uiConfig.Id,
							properties = uiConfig
								.GetAllProperties()
								.Where(p => p.Key.Id != nameof(UiConfig.Id))
								.Select(p => new { propId = p.Key.Id, propValue = p.Value })
								.ToList()
						})
					.ToList()
			});
        }

		public IActionResult Download(Guid configId)
        {
	        return Json(new
	        {
		        result = _configStorageService.GetConfigs().FirstOrDefault(c => c.Id == configId)
	        });
        }

		[HttpPost]
		public IActionResult AddNew(UiConfig newConfig)
		{
			IConfigValidator validator = new ConfigValidator();
			IValidationResult configValidationResult = validator.IsValid(newConfig);
			string jsonResult = "";
			if (configValidationResult.IsValid)
			{
				_configStorageService.AddNewConfig(_mapper.Map<CoreConfig>(newConfig));
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