using MediaCollectionBackend.BusinessLayer.BusinessModels;

namespace MediaCollectionBackend.BusinessLayer
{
    public interface IMediaService
    {
        void DeleteMedia(string id);
        IEnumerable<MediaBL> GetAllMedias();
        MediaBL GetMediaByID(string id);
        void InsertMedia(MediaBL media);
        void UpdateMedia(MediaBL media);
    }
}