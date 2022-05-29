import './App.css';
import {Provider as NonogramProvider} from './context/NonogramContext';
import Main from './Main'

function App() {
  return (
    <NonogramProvider>
      <div className="App">
        <Main />
      </div>
    </NonogramProvider>
  );
}

export default App;
