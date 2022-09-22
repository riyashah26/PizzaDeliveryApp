//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
//using System.Data.SqlClient;
//using System.Data;
//using WebApplication2.Models;
//using System.IO;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Cors;
//using Microsoft.AspNetCore.Diagnostics;
//using Microsoft.VisualBasic;
//using Microsoft.EntityFrameworkCore.Metadata.Conventions;
//using Microsoft.EntityFrameworkCore;
//namespace WebApplication2.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    [EnableCors("AllowOrigin")]
//    public class OrderController : ControllerBase
//    {
//        private readonly IConfiguration _configuration;
//        private readonly IWebHostEnvironment _env;
//        public readonly OrderContext _context;
//        public OrderController(IConfiguration configuration, IWebHostEnvironment env, OrderContext context)
//        {
//            _configuration = configuration; 
//            _env = env; 
//            _context = context; 
//        }
//        [HttpPost("OrderDetails")]
//        public IActionResult OrderDetails(Order order)
//        {
//            try
//            {
//                if (_context.Order!= null)
//                {
//                    _context.Order.Add(order);
//                    _context.SaveChanges();
                    
//                }
//                else
//                    {
//                        return new JsonResult(new { statusCode = "400", errorMsg = "Error in saving results" });
//                    }
//            }
//            catch (Exception e)
//            {
//                return new JsonResult(new { statusCode = "400", message = e.Message });
//            }

//            return new JsonResult(new { statusCode = "200", message = "Added Successfully" });
//        }

//    }
//}

