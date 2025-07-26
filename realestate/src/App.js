
import './App.css';
import Companies from './Components/Companies/Companies';
import Extra from './Components/Extra/Extra';
import Header from './Components/Header/Header';
import Residencies from './Components/Residencies/Residencies';
function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Extra/>
      </div>
      <Companies/>
      <Residencies/>
    </div>

  );
}

export default App;
