import { useState } from 'React';
import MediaModal from './MediaModal';
import MediaGrid from "./MediaGrid"
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMediaModal = () => {
    setIsModalOpen(true);
  };

  const closeMediaModal = () => {
    setIsModalOpen(false);
  };

  const confirmMediaModal = (mediaName, mediaAuthor, mediaDescription) => {
    setIsModalOpen(false);
    // Perform the API call
    insertMediaAPIcall(mediaName, mediaAuthor, mediaDescription);
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
      <MediaGrid />
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
