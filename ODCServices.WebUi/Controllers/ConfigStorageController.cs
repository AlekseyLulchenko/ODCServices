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
				new Config { Id = "D90E6BD0-D468-4842-8326-BA83BF00FAEE", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.3" },
				new Config { Id = "D90E6BD0-D468-4842-8326-BA83BF00FAEE", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.4" },
				new Config { Id = "D90E6BD0-D468-4842-8326-BA83BF00FAEE", Name = "OpenLab Server", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.5" },
				new Config { Id = "D90E6BD0-D468-4842-8326-BA83BF00FAEE", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.3" },
				new Config { Id = "D90E6BD0-D468-4842-8326-BA83BF00FAEE", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.4" },
				new Config { Id = "D90E6BD0-D468-4842-8326-BA83BF00FAEE", Name = "OpenLab Client", Created = DateTime.Now.ToString("d MMM yyyy"), Version = "2.5" },
			};
	    }
        public IActionResult Index()
        {
            return View();
        }

        public IEnumerable<Config> GetAll() => _configs;
    }
}