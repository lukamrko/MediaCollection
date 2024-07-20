import React, { useState, useEffect } from 'react';
import './MediaGrid.css';

function MediaGrid() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7148/Media')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [])

    console.log(data);

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
        <div className="media-grid-container">
            <div className="media-grid">
                <div className="media-grid-header">Name</div>
                <div className="media-grid-header">Author</div>
                <div className="media-grid-header">Description</div>
                {allMedia.map(x => (
                    <React.Fragment key={x.id}>
                        <div className="media-grid-item">{x.mediaName}</div>
                        <div className="media-grid-item">{x.mediaAuthor}</div>
                        <div className="media-grid-item">{x.mediaDescription}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

}

export default MediaGrid