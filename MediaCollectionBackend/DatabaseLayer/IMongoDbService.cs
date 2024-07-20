using MongoDB.Driver;

namespace MediaCollectionBackend.DatabaseLayer
{
    public interface IMongoDbService
    {
        IMongoDatabase Database { get; }
    }
}