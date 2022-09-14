using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebApplication2.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.VisualBasic;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]

    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public readonly LoginContext _context;
        public LoginController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpPost("LoginDetails")]
        public IActionResult LoginDetails(Login login ) 
        {
            //_context.Login.Where(l=>l.emailId)
            try
            {
                if (_context.Logins != null)
                {
                    _context.Logins.Add(login);
                    _context.SaveChanges();
                    return Ok("Added successfully");
                }
            }
            catch (Exception e)
            {
                return (IActionResult)e.GetType();
            }
    

            return new JsonResult("Added Successfully");
        }

    }
}
