using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi.Controllers
{
    public class ConfigStorageController : Controller
    {
	    private List<UiConfig> _configs;

	    public ConfigStorageController()
	    {
			List<UiConfigProperty> properties = new List<UiConfigProperty>
			{
				new UiConfigProperty{ DisplayName = "OLSSAdmin", Value = "admin", XmlPath = "Config.OLSS.AdminName" },
				new UiConfigProperty{ DisplayName = "OLSSAdminPassword", Value = "Welcome01_", XmlPath = "Config.OLSS.AdminPswd" },
			};
		    _configs = new List<UiConfig>
		    {
				new UiConfig { Id = "id-1", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.3", Properties = properties },
				new UiConfig { Id = "id-2", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.4", Properties = properties  },
				new UiConfig { Id = "id-3", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.5", Properties = properties  },
				new UiConfig { Id = "id-4", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.3", Properties = properties  },
				new UiConfig { Id = "id-5", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.4", Properties = properties  },
				new UiConfig { Id = "id-6", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.5", Properties = properties  },
			};
	    }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetAll()
        {
			return Json(new
			{
				result = _configs.Select(c => new { Id = c.Id, Properties = c.GetAllProperties() }).ToList()
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