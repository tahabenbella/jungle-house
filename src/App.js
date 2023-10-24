import './App.css';
import { useState,useEffect } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';


function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
    return (
      <>
        <Banner />
        <div className='jh-layout-inner'>
          <Cart cart={cart} updateCart={updateCart}/>
          <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
        
        
        <Footer/>
      </>
      )
}
 
export default App

