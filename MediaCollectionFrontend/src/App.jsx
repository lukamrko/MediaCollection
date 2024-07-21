import { useState, useEffect } from 'React';
import MediaModal from './MediaModal';
import MediaGrid from "./MediaGrid"
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    fetchMediaData();
  }, []);

  const fetchMediaData = async () => {
    try {
      const response = await fetch('https://localhost:7148/Media');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMediaData(data);
    } catch (error) {
      console.error('Error:', error);
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
    // Perform the API call
    try {
      await insertMediaAPIcall(mediaName, mediaAuthor, mediaDescription);
      fetchMediaData(); // Refresh media data after successful POST
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const insertMediaAPIcall = async (mediaName, mediaAuthor, mediaDescription) => {
    try {
      const response = await fetch('https://localhost:7148/Media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mediaName, mediaAuthor, mediaDescription }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
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
