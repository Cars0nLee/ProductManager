import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Components/Products';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Product Manager</h2>
      </header>
      <div id="form">
        <Products></Products>
      </div>
      
    </div>
  );
}

export default App;
