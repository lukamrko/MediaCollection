import {useState} from 'React';
import PropTypes from 'prop-types';
import './MediaModal.css';

const MediaModal = ({ isOpen, onClose, onConfirm }) => {
    let [mediaName, setMediaName] = useState("");
    let [mediaAuthor, setMediaAuthor] = useState("");
    let [mediaDescription, setMediaDescription] = useState("");

    if (!isOpen) return null;

    //TODO - add changes for possibility of update
    let isInsert = true;
    let modalTitle = isInsert ? "Insert media" : "Update media";

    function handleNameChange(e){
        setMediaName(e.target.value);
    }

    function handleAuthorChange(e) {
        setMediaAuthor(e.target.value);
    }

    function handleDescriptionChange(e) {
        setMediaDescription(e.target.value);
    }

    const handleConfirm = () => {
        onConfirm(mediaName, mediaAuthor, mediaDescription);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{modalTitle}</h2>
                <p>Please fill the following form</p>
                <div>
                    <label>Name: </label>
                    <input type="text" value={mediaName} placeholder='Name' onChange={handleNameChange}/>
                </div>
                <div>
                    <label>Author: </label>
                    <input type="text" value={mediaAuthor} placeholder='Author' onChange={handleAuthorChange} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={mediaDescription} placeholder='Description' onChange={handleDescriptionChange} />
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
};

export default MediaModal;