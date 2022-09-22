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
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.EntityFrameworkCore;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]

    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public readonly AppDBContext _context;
        public LoginController(IConfiguration configuration, IWebHostEnvironment env,AppDBContext context)
        {
            _configuration = configuration;
            _env = env;
            _context = context; 
        }
        [HttpPost("LoginDetails")]
        public IActionResult LoginDetails(Login login ) 
        {
            //_context.Login.Where(l=>l.emailId)
            try
            {//if(_context.Login.Where(l => l.emailId.ToLower() == login.emailId.ToLower()).FirstOrDefault() != null)
                if (_context.Login.Where(l => l.emailId.ToLower() == login.emailId.ToLower()).FirstOrDefault() != null) {

                    return new JsonResult(new { statusCode = "400", errorMsg = "EmailId already exists" });
                }
                else
                {
                    if (_context.Login != null)
                    {
                        _context.Login.Add(login);
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
                return new JsonResult(new { statusCode = "400" ,message = e.Message });
            }


            return new JsonResult(new{ statusCode= "200",message = "Added Successfully"});
        }

    }
}
