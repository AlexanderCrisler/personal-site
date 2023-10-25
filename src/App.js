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
        <li>
          <p>DTN</p>
          <p>[timeframe]</p>
          <p>[description]</p>
        </li>
        <li>
          <p>Warpspeed</p>
          <p>[timeframe]</p>
          <p>[description]</p>
        </li>
        <li>
          <p>Netapp</p>
          <p>[timeframe]</p>
          <p>[description]</p>
        </li>
      </ul>
      <h3>Tools & Languages:</h3>
      <ul>
        <li>Python</li>
        <li>C/C++</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Unity</li>
      </ul>
      <h3>Projects:</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
