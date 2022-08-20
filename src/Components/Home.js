
const Home = ({ text }) => {

  return (
    <div className="home">
      <h2>{text}</h2>
      <h3>Press mouse key to start</h3>
      <div>
        <img src="/angry-bird.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
