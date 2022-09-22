using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal;
using WebApplication2.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name : "AllowOrigin", builder =>
        {
            builder.WithOrigins( "https://localhost:4200" ).AllowAnyHeader().AllowAnyMethod();
        });
});
builder.Services.AddControllers();
builder.Services.AddDbContext<WebApplication2.Models.AppDBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnStr")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
