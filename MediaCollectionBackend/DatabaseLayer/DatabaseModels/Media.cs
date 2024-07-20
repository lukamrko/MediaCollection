using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MediaCollectionBackend.DatabaseLayer.DatabaseModels
{
    public class Media
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? Id {  get; set; }

        [BsonElement("media_name"), BsonRepresentation(BsonType.String)]
        public string? MediaName { get; set; }
        
        [BsonElement("media_author"), BsonRepresentation(BsonType.String)]
        public string? MediaAuthor { get; set; }

        [BsonElement("media_description"), BsonRepresentation(BsonType.String)]
        public string? MediaDescription { get; set;}
    }
}
