using AutoMapper;
using ODCServices.ConfigStorage.Core.Models;
using ODCServices.ConfigStorage.Data.Models;
using ODCServices.WebUi.Models.ConfigStorage;

namespace ODCServices.WebUi
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
			CreateMap<UiConfig, CoreConfig>().ReverseMap();
			CreateMap<CoreConfig, DbConfig>().ReverseMap();

			CreateMap<UiConfigProperty, CoreConfigProperty>().ReverseMap();
			CreateMap<CoreConfigProperty, DbConfigProperty>().ReverseMap();
		}
	}
}
