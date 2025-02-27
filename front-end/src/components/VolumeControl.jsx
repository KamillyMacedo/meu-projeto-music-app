import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute, faVolumeDown } from "@fortawesome/free-solid-svg-icons";

const VolumeControl = ({ audioRef }) => {
  const [volume, setVolume] = useState(1); // Volume inicial em 100%
  const [isMuted, setIsMuted] = useState(false);

  // Atualiza o volume sempre que o estado mudar
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted, audioRef]);

  // Alternar mudo
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="volume-control">
      <FontAwesomeIcon 
        icon={isMuted ? faVolumeMute : volume > 0.5 ? faVolumeUp : faVolumeDown} 
        onClick={toggleMute} 
        className="volume-icon"
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="volume-slider"
      />
    </div>
  );
};

export default VolumeControl;