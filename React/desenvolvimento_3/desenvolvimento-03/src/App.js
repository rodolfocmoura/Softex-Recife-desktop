import './App.css';
import NomeDoComponente from './ClassComponent';
import Form from './form';

function App() {
  return(
    <div>
      <h2>Provedor de internet BLABLAH</h2>
      <NomeDoComponente imagem="https://via.placeholder.com/200x100" titulo="Internet"  descricao="Internet banda larga de 200Mbps"/>
      <NomeDoComponente imagem="https://via.placeholder.com/200x100" titulo="TV"  descricao="50 Canais"/>
      <NomeDoComponente imagem="https://via.placeholder.com/200x100" titulo="Telefonia"  descricao="Livre pra todo brasil"/>
      <Form />
    </div>
  )
}

export default App;
