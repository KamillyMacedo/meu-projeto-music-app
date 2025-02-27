import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, 
         faCirclePause,
         faBackwardStep, 
         faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import VolumeControl from "./VolumeControl";

// Função para formatar o tempo em minutos:segundos
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
  const audioPlayer = useRef(null); // Garantindo que a referência esteja inicializada
  const progressBar = useRef(null); // Referência da barra de progresso
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Inicializamos o estado de currentTime
  const [durationInSeconds, setDurationInSeconds] = useState(0); // Inicializamos a duração


  // Função Play/Pause
  const playPause = () => {
    if (audioPlayer.current) {
      if (isPlaying) {
        audioPlayer.current.pause();
      } else {
        audioPlayer.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (event) => {
    if (audioPlayer.current) {
      const bar = event.currentTarget; // Obtém a referência da barra
      const clickX = event.nativeEvent.offsetX; // Posição do clique
      const barWidth = bar.clientWidth; // Largura total da barra
  
      const newTime = (clickX / barWidth) * audioPlayer.current.duration;
      audioPlayer.current.currentTime = newTime; // Atualiza a posição da música
      setCurrentTime(newTime); // Atualiza o estado
    }
  };

  // Atualiza o tempo atual e a barra de progresso a cada segundo
  useEffect(() => {
    if (audioPlayer.current) {
      const intervalId = setInterval(() => {
        const current = audioPlayer.current.currentTime;
        setCurrentTime(current); // Atualiza o tempo atual
        const progressPercent = (current / audioPlayer.current.duration) * 100;
        if (progressBar.current) {
          progressBar.current.style.width = `${progressPercent}%`; // Atualiza a largura da barra de progresso
        }
      }, 1000);

      // Obtém a duração total da música (convertida para segundos)
      audioPlayer.current.onloadedmetadata = () => {
        setDurationInSeconds(audioPlayer.current.duration); // Define a duração em segundos
      };

      return () => clearInterval(intervalId);
    }
  }, [isPlaying]); // O useEffect será re-executado quando 'isPlaying' mudar

  // Formatar duração total e tempo atual
  const formattedDuration = formatTime(durationInSeconds);
  const formattedCurrentTime = formatTime(currentTime);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <Link>
          <FontAwesomeIcon 
            className="player__icon--play" 
            icon={isPlaying ? faCirclePause : faCirclePlay} // Alterna entre play e pause
            onClick={playPause} 
          />
        </Link>

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        {/* Exibe o tempo atual da música */}
        <p>{formattedCurrentTime}</p>

        <div className="player__bar" onClick={handleProgressClick}>
            <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        {/* Exibe a duração total formatada */}
        <p>{formattedDuration}</p>
      </div>

      <audio ref={audioPlayer} src={audio} />

      <VolumeControl audioRef={audioPlayer} />

    </div>
  );
};

export default Player;
