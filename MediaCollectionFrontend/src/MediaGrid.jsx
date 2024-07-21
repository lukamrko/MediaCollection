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
                {mediaData.map(x => (
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

MediaGrid.propTypes = {
    mediaData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        mediaName: PropTypes.string.isRequired,
        mediaAuthor: PropTypes.string.isRequired,
        mediaDescription: PropTypes.string.isRequired,
    })).isRequired,
};

export default MediaGrid