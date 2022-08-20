import { useEffect, useState } from "react";

const Bird = ({ jump, setJump, gameOver, holePosition, shield, setShield, lift }) => {
  const [birdHeight, setBirdHeight] = useState(100);

  useEffect(() => {
    const blockLeft = parseInt(
      window
        .getComputedStyle(document.querySelector(".hole"))
        .getPropertyValue("left")
    );

    const packageTop =
      625 +
      parseInt(
        window
          .getComputedStyle(document.querySelector(".powerup"))
          .getPropertyValue("top")
      );

    const packageLeft = parseInt(
      window
        .getComputedStyle(document.querySelector(".powerup"))
        .getPropertyValue("left")
    );

    if (
      packageLeft < 50 &&
      packageLeft > -20 &&
      Math.abs(packageTop - birdHeight) < 20
    ) {
      setShield(true);
    }

    if (
      birdHeight > 500 ||
      birdHeight < -10 ||
      (!shield &&
        blockLeft < 30 &&
        blockLeft > -20 &&
        (birdHeight < holePosition || birdHeight > holePosition + 130))
    ) {
      setJump(jump);
      gameOver();
      return;
    }

    if (jump > 0) {
      const id = setInterval(() => {
        setBirdHeight(birdHeight - 7.5);
      }, 20);
      setJump(1);
      return () => clearInterval(id);
    } else if (!jump) {
      const id = setInterval(() => {
        setBirdHeight(birdHeight + 3);
      }, 15);
      return () => clearInterval(id);
    }
  }, [birdHeight]);

  return (
    <div
      className="bird"
      style={{ top: birdHeight, animation: shield ? "super 8s linear" : "none", boxShadow: lift ? "-10px 10px 50px 20px red" : "none" }}
    >
      <img src="/angry-bird.png" alt="" />
    </div>
  );
};

export default Bird;
