using MediaCollectionBackend.BusinessLayer.BusinessModels;

namespace MediaCollectionBackend.BusinessLayer
{
    public class MediaService : IMediaService
    {
        public IEnumerable<MediaBL> GetAllMedias()
        {
            return Array.Empty<MediaBL>();
        }

        public void InsertMedia()
        {

        }
    }
}
