using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication2.Models
{
    public class Employee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int empId { get; set; } 
            public string firstName { get; set; } = string.Empty;
            public string lastName { get; set; } = string.Empty;


             [Key]
            public string emailId { get; set; } = string.Empty;
            public string contactDetails { get; set; } = string.Empty;
        public string salary { get; set; } = string.Empty;

    }
}
