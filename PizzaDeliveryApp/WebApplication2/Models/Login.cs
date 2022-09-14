using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace WebApplication2.Models
{
    public class Login
    {
        [Key]
        public string emailId { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }
}
