const Block = ({ holePosition }) => {

  return (
    <div className="block">
      <div id="cylinder" className="upper" style={{ top: `${holePosition - 500}px` }}></div>
      <div className="lower" style={{ top: `${holePosition + 150}px` }}></div>
    </div>
  );
};

export default Block;
