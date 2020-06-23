using cisep.interfaces;
using cisep.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cisep.Repositories
{
    public class UnitOfWorkRepo : IUnitOfWork
    {
        private readonly cisepDBContext _context;
        private IServices _servicesRepo;
        public UnitOfWorkRepo(cisepDBContext context)
        {
            _context = context;
        }
        public IServices Services
        {
            get
            {
                return _servicesRepo = _servicesRepo ?? new ServicesRepo(_context);
            }
            set { }
        }

        public void Save()
        {
           _context.SaveChanges();
        }
    }
}
