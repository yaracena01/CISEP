using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using cisep.interfaces;
using cisep.ViewModels.ServicesViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cisep.Controllers
{
    public class ServicesPageController : Controller
    {
        // GET: ServicesPage
        private readonly IUnitOfWork _unitOfWork;
        private IMapper _mapper;

        public ServicesPageController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreditRepairIndex()
        {
            var model = _unitOfWork.Services.GetAllCreditServices();
            var vw = _mapper.Map<List<ServicesViewModel>>(model);
            ViewBag.services = vw;
            return View();
        }

        public ActionResult WebSiteIndex()
        {
            var model = _unitOfWork.Services.GetAllCreditServices();
            var vw = _mapper.Map<List<ServicesViewModel>>(model);
            ViewBag.services = vw;
            return View();
        }
    }
}