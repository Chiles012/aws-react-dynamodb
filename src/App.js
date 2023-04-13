import logo from './logo.svg';
import { getData, addData, deleteData, updateData } from './utils/aws-dynamodb';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://th.bing.com/th/id/OIP.Ps2rz4OLx5Evy8_6GSD36wHaEK?pid=ImgDet&rs=1' className="App-logo" alt="logo" />
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
        <button onClick={() => getData()}>Get data</button>
        <button onClick={() => addData()}>Add item</button>
        <button onClick={() => deleteData()}>Delete item</button>
        <button onClick={() => updateData()}>Update Item</button>
      </header>
    </div>
  );
}

export default App;
