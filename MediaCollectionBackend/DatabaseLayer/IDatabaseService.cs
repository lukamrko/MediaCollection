using MediaCollectionBackend.DatabaseLayer.DatabaseModels;

namespace MediaCollectionBackend.DatabaseLayer
{
    public interface IDatabaseService
    {
        void DeleteMedia(string id);
        IEnumerable<Media> GetAllMedias();
        Media GetMediaById(string id);
        void InsertMedia(Media media);
        void UpdateMedia(Media media);
    }
}