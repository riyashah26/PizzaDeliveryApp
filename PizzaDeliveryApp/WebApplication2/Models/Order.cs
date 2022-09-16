using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        public string name { get; set; } = string.Empty;
        public int price { get; set; }
        public int size { get; set; }
    }
}
