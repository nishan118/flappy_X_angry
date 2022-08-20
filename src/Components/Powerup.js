import { useEffect, useState } from "react";

const Powerup = ({ shield }) => {
  const [chance, setChance] = useState(0);

  useEffect(() => {
    setChance(Math.floor(Math.random() * 2));
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setChance(Math.floor(Math.random() * 2));
    }, 12000);
    return () => clearInterval(id);
  }, [chance]);

  return (
    <>
      <div className="powerup" hidden={shield || chance === 0}>
        <img src="/egg.png" alt="powerup" />
      </div>
    </>
  );
};

export default Powerup;
