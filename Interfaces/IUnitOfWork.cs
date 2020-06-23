using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cisep.interfaces
{
    public interface IUnitOfWork
    {
        public IServices Services { get; set; }

        void Save();
    }
}
