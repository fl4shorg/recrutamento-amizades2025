
import { useRef, useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="sobre" className="py-20 bg-neext-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Conheça a <span className="text-neext-secondary">NEEXT</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra por que somos a maior comunidade de amizade da web e como você pode fazer parte da nossa equipe de administradores.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video 
            ref={videoRef}
            className="w-full h-auto"
            poster="/placeholder.svg"
            onClick={handlePlayPause}
          >
            <source src="https://res.cloudinary.com/ds24tgzw1/video/upload/v1747178960/lv_0_20250513194559_qznhft.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          
          {!isPlaying && (
            <button 
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-opacity"
            >
              <div className="w-20 h-20 rounded-full bg-neext-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
