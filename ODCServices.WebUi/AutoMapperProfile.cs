using AutoMapper;
using ODCServices.Core.Models;
using ODCServices.Data.Models;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
			CreateMap<UiConfig, CoreConfig>().ReverseMap();
			CreateMap<CoreConfig, DbConfig>().ReverseMap();
		}
	}
}
