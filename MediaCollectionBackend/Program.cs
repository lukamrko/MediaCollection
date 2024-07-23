using MediaCollectionBackend.BusinessLayer;
using MediaCollectionBackend.DatabaseLayer;
using MediaCollectionBackend.StartupSettings;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IMongoDbService, MongoDbService>();
builder.Services.AddTransient<IDatabaseService, DatabaseService>();
builder.Services.AddTransient<IMediaService, MediaService>();

// Load CORS settings from appsettings.json
var corsConfiguration = builder.Configuration.GetSection("CorsSettings");
builder.Services.Configure<CorsSettings>(corsConfiguration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// Use CORS settings from the configuration
var corsSettings = app.Services.GetRequiredService<IOptions<CorsSettings>>().Value;
app.UseCors(policy =>
{
    policy.WithOrigins(corsSettings.AllowedOrigins);

    if (corsSettings.AllowAnyHeader)
    {
        policy.AllowAnyHeader();
    }

    if (corsSettings.AllowAnyMethod)
    {
        policy.AllowAnyMethod();
    }
});

app.MapControllers();

app.Run();