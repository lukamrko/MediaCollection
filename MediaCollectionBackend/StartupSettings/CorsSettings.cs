namespace MediaCollectionBackend.StartupSettings
{
    public class CorsSettings
    {
        public string[] AllowedOrigins { get; set; } = Array.Empty<string>();
        public bool AllowAnyHeader { get; set; }
        public bool AllowAnyMethod { get; set; }
    }
}
