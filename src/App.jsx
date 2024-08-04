import { h } from 'preact'; // Preact's equivalent of React's 'import React'
import { useState, useEffect } from 'preact/hooks'; // Preact's hooks
import Header from './components/Header'; // Ensure these components are also compatible with Preact
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import SelectedImage from './components/SelectedImage';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const newImages = [];
    for (let i = 0; i < 20; i++) {
      newImages.push(`https://picsum.photos/1920/1080?random=${i}`);
    }
    setImages(newImages);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ImageGallery images={images} onImageClick={handleImageClick} />
          <SelectedImage selectedImage={selectedImage} />
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

