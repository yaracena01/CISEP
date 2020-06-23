using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cisep.Models;

namespace cisep.Interfaces
{
    interface IClients
    {

        List<Clients> GetAll();
        List<Clients> GetAllCreditServices();
        Services GetById(int? id);
        void Insert(Clients clients);
        void Update(Clients clients);
        void Delete(Clients clients);
    }
}
