import { useState, useEffect } from 'React';
import MediaModal from './MediaModal';
import MediaGrid from "./MediaGrid";
import { fetchMediaData, insertMedia } from './businessLogic/MediaApi.js';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaData, setMediaData] = useState([]);

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

  const openMediaModal = () => {
    setIsModalOpen(true);
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
  };

  const confirmMediaModal = async (mediaName, mediaAuthor, mediaDescription) => {
    setIsModalOpen(false);
    try {
      await insertMedia(mediaName, mediaAuthor, mediaDescription);
      // Refresh media data after successful POST
      fetchAndSetMediaData(); 
    } catch (error) {
      console.error('Error inserting media:', error);
    }
  };

  return (
    <>
      <MediaGrid mediaData={mediaData} />
      <div className='modalButtons'>
        <button className='mainModalButton' onClick={openMediaModal}>Insert media</button>
        <MediaModal
          isOpen={isModalOpen}
          onClose={closeMediaModal}
          onConfirm={confirmMediaModal}
        />
      </div>
    </>
  )
}

export default App
