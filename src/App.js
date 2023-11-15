import logo from './logo.svg';
import './App.css';

function Home () {
  return (
    <div className="Home">
      <h1>Alexander Crisler</h1>
      <p>Software Engineer</p>
      <h2>Experience</h2>
      <h3>Employment History:</h3>
      <ul>
        <ul>
          <p>DTN</p>
          <p>[timeframe]</p>
          <p>[description]</p>
        </ul>
        <ul>
          <p>Warpspeed</p>
          <p>[timeframe]</p>
          <p>[description]</p>
        </ul>
        <ul>
          <p>Netapp</p>
          <p>[timeframe]</p>
          <p>[description]</p>
        </ul>
      </ul>
      <h3>Tools & Languages:</h3>
      <ul>
        <ul>Python</ul>
        <ul>C/C++</ul>
        <ul>Javascript</ul>
        <ul>React</ul>
        <ul>Unity</ul>
      </ul>
      <h3>Projects:</h3>
    </div>
  );
}

function NavBar () {
  return (
    <div>
      <button>Home</button>
      <button>Blog</button>
      <button>About</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
