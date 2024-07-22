import React from 'React';
import PropTypes from 'prop-types';
import './MediaGrid.css';

function MediaGrid({ mediaData }) {
    return (
        <div className="media-grid-container">
            <div className="media-grid">
                <div className="media-grid-header">Name</div>
                <div className="media-grid-header">Author</div>
                <div className="media-grid-header">Description</div>
                {mediaData.map(media => (
                    <React.Fragment key={media.id}>
                        <div className="media-grid-item">{media.mediaName}</div>
                        <div className="media-grid-item">{media.mediaAuthor}</div>
                        <div className="media-grid-item">{media.mediaDescription}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

}

MediaGrid.propTypes = {
    mediaData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        mediaName: PropTypes.string.isRequired,
        mediaAuthor: PropTypes.string.isRequired,
        mediaDescription: PropTypes.string.isRequired,
    })).isRequired,
};

export default MediaGrid