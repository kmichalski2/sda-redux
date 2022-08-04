import './App.css';
import { CartInfo } from './features/cart/CartInfo';
import { Product } from './features/cart/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartInfo></CartInfo>
        <br />
        <Product name="Blue T-shirt"></Product>
        <br />
        <Product name="Red T-shirt"></Product>
        <br />
        <Product name="Green T-shirt"></Product>
      </header>
    </div>
  );
}

// TODO
// 1. Dodaj większą ilość komponentów Product
// 2. Dodaj property name dla komponentu Productu

export default App;
