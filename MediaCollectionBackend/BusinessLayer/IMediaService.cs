using MediaCollectionBackend.BusinessLayer.BusinessModels;

namespace MediaCollectionBackend.BusinessLayer
{
    public interface IMediaService
    {
        IEnumerable<MediaBL> GetAllMedias();
        void InsertMedia();
    }
}