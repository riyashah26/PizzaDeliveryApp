using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public readonly AppDBContext _context;
        public EmployeeController(IConfiguration configuration, IWebHostEnvironment env, AppDBContext context)
        {
            _configuration = configuration;
            _env = env;
            _context = context;
        }

        [HttpGet("GetEmployeesList")]
        public List<Employee> GetEmployeesList()
        {
            List<Employee> empList;
            try
            {
                empList = _context.Set<Employee>().ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return empList;
        }
        [HttpPost("EmployeeDetails")]
        public IActionResult EmployeeDetails(Employee employee)
        {
            
            try
            {
                if (_context.Employee.Where(l => l.emailId.ToLower() == employee.emailId.ToLower()).FirstOrDefault() != null)
                {

                    return new JsonResult(new { statusCode = "400", errorMsg = "Employee already exists" });
                }
                else
                {
                    if (_context.Employee != null)
                    {
                        _context.Employee.Add(employee);
                        _context.SaveChanges();
                    }
                    else
                    {
                        return new JsonResult(new { statusCode = "400", errorMsg = "Error in saving results" });
                    }

                }
            }
            catch (Exception e)
            {
                return new JsonResult(new { statusCode = "400", message = e.Message });
            }


            return new JsonResult(new { statusCode = "200", message = "Added Successfully" });
        }

        [HttpDelete("DeleteEmployeeDetails/empId")]
        public IActionResult DeleteEmployeeDetails(Employee empId)
        {
            if (empId != null)
            {
                return new JsonResult(new { statusCode = "400", errorMsg = "Error in saving results" });
            }
            else
            {
                _context.Employee.Remove(empId);
                _context.SaveChanges();
            }
           
            
            return new JsonResult(new { statusCode = "200", message = "Deleted Successfully" });
        }
    }
}
