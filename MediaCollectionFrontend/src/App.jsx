import { useState, useEffect } from 'react';
import MediaModal from './MediaModal';
import MediaGrid from "./MediaGrid";
import { fetchMediaData, insertMedia, updateMedia } from './businessLogic/MediaApi.js';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaData, setMediaData] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    fetchAndSetMediaData();
  }, []);

  const fetchAndSetMediaData = async () => {
    try {
      const data = await fetchMediaData();
      setMediaData(data);
    } catch (error) {
      console.error('Error fetching media data:', error);
    }
  };

  const openMediaModal = (media = null) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const confirmMediaModal = async (mediaName, mediaAuthor, mediaDescription) => {
    setIsModalOpen(false);
    try {
      if (selectedMedia) {
        await updateMedia(selectedMedia.id, mediaName, mediaAuthor, mediaDescription);
      } else {
        await insertMedia(mediaName, mediaAuthor, mediaDescription);
      }
      fetchAndSetMediaData();
    } catch (error) {
      console.error('Error inserting/updating media:', error);
    }
  };

  return (
    <>
      <MediaGrid mediaData={mediaData} onMediaClick={openMediaModal} />
      <div className='modalButtons'>
        <button className='mainModalButton' onClick={() => openMediaModal(null)}>Insert media</button>
        <MediaModal
          isOpen={isModalOpen}
          onClose={closeMediaModal}
          onConfirm={confirmMediaModal}
          selectedMedia={selectedMedia}
        />
      </div>
    </>
  )
}

export default App;
