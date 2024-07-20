using MediaCollectionBackend.BusinessLayer;
using MediaCollectionBackend.BusinessLayer.BusinessModels;
using Microsoft.AspNetCore.Mvc;

namespace MediaCollectionBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MediaController : ControllerBase
    {
        private readonly IMediaService _mediaService;

        public MediaController(IMediaService mediaService)
        {
            _mediaService = mediaService;
        }

        [HttpGet()]
        public IEnumerable<MediaBL> Get()
        {
            return _mediaService.GetAllMedias();
        }

        [HttpGet("{id}")]
        public MediaBL GetByID(string id)
        {
            return _mediaService.GetMediaByID(id);
        }

        [HttpPost]
        public void InsertMedia(MediaBL media) 
        {
            _mediaService.InsertMedia(media);
        }

        [HttpPut]
        public void UpdateMedia(MediaBL media)
        {
            _mediaService.UpdateMedia(media);
        }

        [HttpDelete("{id}")]
        public void DeleteMedia(string id)
        {
            _mediaService.DeleteMedia(id);
        }
    }
}
