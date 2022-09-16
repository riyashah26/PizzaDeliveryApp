using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class OrderContext: DbContext
    {
        public OrderContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Order>? Order { get; set; }
    }
}
