
import './App.css';
import Propriedades from './Componente01';

function App() {
  var n = prompt(("Defina o valor de Props"))
  function AumentaProps (){
    return n++
  }
  return (
    <div className="App">
      <header className="App-header">

        <Propriedades props={n} />
        <button onClick={AumentaProps}>Aumentar Props</button>
        
      </header>
    </div>
  );
}

export default App;
