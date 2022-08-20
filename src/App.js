import { useState, useEffect } from "react";
import "./App.css";
import Levels from "./Components/Levels";

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    setBestScore(Math.max(bestScore, currentScore));
  }, [currentScore]);

  return (
    <div className="App">
      <Levels setCurrentScore={(val) => setCurrentScore(val)} />
      <div className="stats">
        <p>Max Level:{bestScore}</p>
        <p>Current Level:{currentScore}</p>
      </div>
    </div>
  );
};

export default App;
