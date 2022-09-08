import logo from './softex.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Teste de página react para a Softex.
        </p>
        <a
          className="App-link"
          href="http://www.softexrecife.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da Softex
        </a>
      </header>
    </div>
  );
}

export default App;