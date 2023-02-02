import './App.css';
import BarraSuperior from './components/BarraSuperior';
import Cartas from './components/Cartas';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <BarraSuperior/>
      {/* <Contador/> */}
      <Cartas/>
    </div>
  );
}

export default App;
