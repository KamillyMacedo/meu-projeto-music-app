import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import VolumeControl from "./VolumeControl";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationInSeconds, setDurationInSeconds] = useState(0);

  // Atualiza a duração da nova música
  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.load();
      audioPlayer.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });

      audioPlayer.current.onloadedmetadata = () => {
        setDurationInSeconds(audioPlayer.current.duration);
      };
    }
  }, [audio]);

  useEffect(() => {
    if (isPlaying && audioPlayer.current) {
      const intervalId = setInterval(() => {
        if (audioPlayer.current) {
          const current = audioPlayer.current.currentTime;
          setCurrentTime(current);
          const progressPercent = (current / audioPlayer.current.duration) * 100;
          if (progressBar.current) {
            progressBar.current.style.width = `${progressPercent}%`;
          }
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isPlaying]);

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
      const bar = event.currentTarget;
      const clickX = event.nativeEvent.offsetX;
      const barWidth = bar.clientWidth;

      const newTime = (clickX / barWidth) * audioPlayer.current.duration;
      audioPlayer.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

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
            icon={isPlaying ? faCirclePause : faCirclePlay}
            onClick={playPause}
          />
        </Link>

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{formattedCurrentTime}</p>
        <div className="player__bar" onClick={handleProgressClick}>
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{formattedDuration}</p>
      </div>

      <audio ref={audioPlayer} src={audio} />
      <VolumeControl audioRef={audioPlayer} />
    </div>
  );
};

export default Player;
