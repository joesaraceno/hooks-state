import './App.css';
import Product from './components/Product'
import Product2 from './components/Product2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product />
        <div style={{margin: '20px'}}></div>
        <Product2 />
      </header>
    </div>
  );
}

export default App;
