using cisep.interfaces;
using cisep.Interfaces;
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
        private IServices _IservicesRepo;
        private IClients _IclientsRepo;
        public UnitOfWorkRepo(cisepDBContext context)
        {
            _context = context;
        }
        public IServices Services
        {
            get
            {
                return _IservicesRepo = _IservicesRepo ?? new ServicesRepo(_context);
            }
            set { }
        }

        public IClients Clients {
            get
            {
                return _IclientsRepo = _IclientsRepo ?? new ClientsRepo(_context);
            }
            set { }
        }

        public void Save()
        {
           _context.SaveChanges();
        }
    }
}
