using MediaCollectionBackend.DatabaseLayer.DatabaseModels;
using MongoDB.Driver;

namespace MediaCollectionBackend.DatabaseLayer
{
    public class DatabaseService : IDatabaseService
    {
        private readonly IMongoCollection<Media> _medias;

        public DatabaseService(IMongoDbService dbService)
        {
            _medias = dbService.Database.GetCollection<Media>("media");
        }

        public IEnumerable<Media> GetAllMedias()
        {
            var medias = _medias.Find(FilterDefinition<Media>.Empty).ToList();

            return medias;
        }

        public Media GetMediaById(string id)
        {
            var filter = Builders<Media>.Filter.Eq(x => x.Id, id);
            var media = _medias.Find(filter).FirstOrDefault();

            return media;
        }

        public void InsertMedia(Media media)
        {
            _medias.InsertOne(media);
        }

        public void UpdateMedia(Media media)
        {
            var filter = Builders<Media>.Filter.Eq(x => x.Id, media.Id);
            _medias.ReplaceOne(filter, media);
        }

        public void DeleteMedia(string id)
        {
            var filter = Builders<Media>.Filter.Eq(x => x.Id, id);
            _medias.DeleteOne(filter);
        }
    }
}
