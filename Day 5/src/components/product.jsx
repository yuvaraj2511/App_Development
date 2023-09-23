import React from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Footer from './Footer';



function Product() {
  return (
    <div className='App'>
      <Navbar/>
      <ProductCard />
      <Footer/>
    </div>
  );
}

export default Product;
