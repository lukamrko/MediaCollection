import React, { useState, useEffect } from 'react';
import './MediaGrid.css';

function MediaGrid() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7148/Media')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [])

    return (
        <div className="media-grid-container">
            <div className="media-grid">
                <div className="media-grid-header">Name</div>
                <div className="media-grid-header">Author</div>
                <div className="media-grid-header">Description</div>
                {data.map(x => (
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