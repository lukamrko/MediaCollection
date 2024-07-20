function MediaGrid() {

    var allMedia = [
        {
            id: "abc-1",
            mediaName: "test-1",
            mediaAuthor: "covjek-1",
            mediaDescription: "test-1-descr"
        },
        {
            id: "abc-2",
            mediaName: "test-2",
            mediaAuthor: "covjek-2",
            mediaDescription: "test-2-descr"
        }];


    return (
        <div>
            <ul>
                {allMedia.map(x => (
                    <li key={x.id}>Name: {x.mediaName} - Author: {x.mediaAuthor} - Description: {x.mediaDescription}</li>
                ))}
            </ul>
        </div>
    );
}

export default MediaGrid