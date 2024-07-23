import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MediaModal.css';

const MediaModal = ({ isOpen, onClose, onConfirm, selectedMedia }) => {
    const [mediaName, setMediaName] = useState("");
    const [mediaAuthor, setMediaAuthor] = useState("");
    const [mediaDescription, setMediaDescription] = useState("");

    useEffect(() => {
        if (selectedMedia) {
            setMediaName(selectedMedia.mediaName);
            setMediaAuthor(selectedMedia.mediaAuthor);
            setMediaDescription(selectedMedia.mediaDescription);
        } else {
            setMediaName("");
            setMediaAuthor("");
            setMediaDescription("");
        }
    }, [selectedMedia]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm(mediaName, mediaAuthor, mediaDescription);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{selectedMedia ? "Update media" : "Insert media"}</h2>
                <p>Please fill the following form</p>
                <div>
                    <label>Name: </label>
                    <input type="text" value={mediaName} placeholder='Name' onChange={(e) => setMediaName(e.target.value)} />
                </div>
                <div>
                    <label>Author: </label>
                    <input type="text" value={mediaAuthor} placeholder='Author' onChange={(e) => setMediaAuthor(e.target.value)} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={mediaDescription} placeholder='Description' onChange={(e) => setMediaDescription(e.target.value)} />
                </div>
                <div className="modal-buttons">
                    <button onClick={handleConfirm}>OK</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

MediaModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    selectedMedia: PropTypes.shape({
        id: PropTypes.string,
        mediaName: PropTypes.string,
        mediaAuthor: PropTypes.string,
        mediaDescription: PropTypes.string,
    }),
};

export default MediaModal;
