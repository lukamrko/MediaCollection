using MediaCollectionBackend.BusinessLayer.BusinessModels;
using MediaCollectionBackend.DatabaseLayer;
using MediaCollectionBackend.DatabaseLayer.DatabaseModels;

namespace MediaCollectionBackend.BusinessLayer
{
    public class MediaService : IMediaService
    {
        private readonly IDatabaseService _databaseService;

        public MediaService(IDatabaseService databaseService) 
        {
            _databaseService = databaseService;
        }

        public IEnumerable<MediaBL> GetAllMedias()
        {
            var allMedias = _databaseService.GetAllMedias();
            var allMediasBL = GetMediaBLsFromDLs(allMedias);

            return allMediasBL;
        }

        public MediaBL GetMediaByID(string id)
        {
            var media = _databaseService.GetMediaById(id);
            var mediaBL = GetMediaBLFromDl(media);

            return mediaBL;
        }

        public void InsertMedia(MediaBL media)
        {
            var mediaDL = GetMediaDLFromBL(media);
            mediaDL.Id = string.Empty;
            _databaseService.InsertMedia(mediaDL);
        }

        public void UpdateMedia(MediaBL media)
        {
            var mediaDL = GetMediaDLFromBL(media);
            _databaseService.UpdateMedia(mediaDL);
        }

        public void DeleteMedia(string id)
        {
            _databaseService.DeleteMedia(id);
        }

        internal List<MediaBL> GetMediaBLsFromDLs(IEnumerable<Media> medias)
        {
            var mediasBL = new List<MediaBL>();
            foreach(var media in medias)
            {
                var mediaBL = GetMediaBLFromDl(media);
                mediasBL.Add(mediaBL);
            }
            return mediasBL;
        }

        internal MediaBL GetMediaBLFromDl(Media media)
        {
            var mediaBL = new MediaBL
            {
                Id = media.Id ?? string.Empty,
                MediaName = media.MediaName ?? string.Empty,
                MediaAuthor = media.MediaAuthor ?? string.Empty,
                MediaDescription = media.MediaDescription ?? string.Empty,
            };

            return mediaBL;
        }

        internal Media GetMediaDLFromBL(MediaBL mediaBL)
        {
            var media = new Media 
            { 
                Id = mediaBL.Id ?? string.Empty, 
                MediaName = mediaBL.MediaName ?? string.Empty, 
                MediaAuthor = mediaBL.MediaAuthor ?? string.Empty, 
                MediaDescription = mediaBL.MediaDescription ?? string.Empty, 
            };

            return media;
        }
    }
}
