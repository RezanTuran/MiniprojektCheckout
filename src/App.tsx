import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/cartContxt'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Nav />
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>

  );
};


export default App;
