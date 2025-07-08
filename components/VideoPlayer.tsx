'use client';
import { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Eliminar esta línea:
  const [showVolumeMessage, setShowVolumeMessage] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.5;
        // Y también eliminar esta línea:
        setShowVolumeMessage(false);
      }
    };

    const handleVolumeChange = () => {
      if (videoRef.current && !videoRef.current.muted && videoRef.current.volume > 0) {
        // Y también eliminar esta línea:
        setShowVolumeMessage(false);
      }
    };

    document.addEventListener('click', handleClick);
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('volumechange', handleVolumeChange);
    }
    
    return () => {
      document.removeEventListener('click', handleClick);
      if (videoElement) {
        videoElement.removeEventListener('volumechange', handleVolumeChange);
      }
    };
  }, []);

  return (
    <>
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        controls
        poster={poster}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </>
  );
}