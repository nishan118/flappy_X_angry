import { useEffect, useState } from "react";

const Hole = ({ hurdles, levelComplete, holePosition, setHolePosition }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === hurdles) levelComplete();
  }, [counter]);

  const onAnimate = () => {
    const random = Math.floor(Math.random() * 351);
    setHolePosition(random);
    setCounter(counter + 1);
  };
  return (
    <div
      className="hole"
      style={{ top: `-${holePosition}px` }}
      onAnimationIteration={onAnimate}
    ></div>
  );
};

export default Hole;
