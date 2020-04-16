using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ODCServices.WebUi.Models;

namespace ODCServices.WebUi.Controllers
{
    public class ConfigStorageController : Controller
    {
	    private List<Config> _configs;
	    public ConfigStorageController()
	    {
		    _configs = new List<Config>
		    {
				new Config { Id = "id-1", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.3" },
				new Config { Id = "id-2", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.4" },
				new Config { Id = "id-3", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.5" },
				new Config { Id = "id-4", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.3" },
				new Config { Id = "id-5", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.4" },
				new Config { Id = "id-6", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.5" },
			};
	    }
        public IActionResult Index()
        {
            return View();
        }

        public IEnumerable<Config> GetAll() => _configs;

        public IActionResult Download(string configId)
        {
	        return Json(new
	        {
		        result = _configs.Where(c => c.Id == configId)
	        });
        }
    }
}