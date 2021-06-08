import logo from './logo.svg';
import './App.css';
import Background from './composents/Background';
import Main from './composents/Main';
import DataBlock from './composents/DataBlock';
import Temp from './composents/Temp';

function App() {
  return (
    <div>
      <Background/>
      <Main/>
      <Temp/>
      <DataBlock/>
    </div>
  );
}

export default App;
