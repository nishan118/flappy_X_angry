import { useEffect, useState } from "react";
import Block from "./Block";
import Hole from "./Hole";
import Bird from "./Bird";
import Home from "./Home";
import Powerup from "./Powerup";

const Levels = ({ setCurrentScore }) => {
  const [holePosition, setHolePosition] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [hurdles, setHurdles] = useState(3);
  const [safe, setSafe] = useState(1);
  const [jump, setJump] = useState(0);
  const [shield, setShield] = useState(false);
  const [lift, setLift] = useState(false);

  const audio = new Audio("/bass-drop.mp3");
  useEffect(() => {
    if (shield) {
      audio.play();
      const id = setInterval(() => {
        setShield(false);
      }, 5000);
      return () => clearInterval(id);
    }
  }, [shield]);

  useEffect(() => {
    const id = setInterval(() => {
      setLift(false);
    }, 100);
    return () => clearInterval(id);
  }, [lift]);

  const onGameOver = () => {
    setSafe(-1);
    setCurrentLevel(0);
    setHurdles(3);
    setHolePosition(0);
    setShield(false);
  };

  const onLevelCompletion = () => {
    setSafe(1);
    setCurrentScore(currentLevel + 1);
    setCurrentLevel(currentLevel + 1);
    setHurdles(hurdles + 2);
    setShield(false);
    setJump(jump);
  };

  const handleClick = () => {
    if (safe === -1) {
      setCurrentScore(0);
    }
    setSafe(0);
  };
  return (
    <div
      className="levels"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="game">
        {safe !== 0 ? (
          <Home text={safe === -1 ? "Game Over :(" : "Level " + currentLevel} />
        ) : (
          <div
            onClick={() => {
              setJump(jump + 15);
              setLift(true);
            }}
          >
            <Block holePosition={holePosition} />
            <Hole
              hurdles={hurdles}
              levelComplete={() => onLevelCompletion()}
              holePosition={holePosition}
              setHolePosition={(val) => setHolePosition(val)}
            />
            <Bird
              jump={jump}
              setJump={(val) => setJump(jump - val)}
              gameOver={() => onGameOver()}
              holePosition={holePosition}
              shield={shield}
              setShield={() => setShield(true)}
              lift={lift}
            />
            <Powerup shield={shield} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Levels;
