import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CheckOut from './components/CheckOut/CheckOut';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navigation from './components/Navigation/Navigation'
import CartContextComponent from './context/CartContextComponent';


export default function App() { 
  return (
    <>
      <CartContextComponent>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element = {<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element = {<ItemListContainer/>}/>
        <Route path='/Item/:idItem' element = {<ItemDetailContainer/>}/>
        <Route path='/CheckOut' element = {<CheckOut/>}/>
        <Route path='/Cart' element = {<Cart/>}/>
      </Routes>      
      </BrowserRouter>
      </CartContextComponent>
      
    </>
  );
}


