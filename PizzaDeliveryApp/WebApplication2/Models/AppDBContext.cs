using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions options) : base(options)
        {

        }
        
        public DbSet<Login>? Login { get; set; }
        public DbSet<Order>? Order { get; set; }

        public DbSet<Employee>? Employee { get; set; }
    }
}
