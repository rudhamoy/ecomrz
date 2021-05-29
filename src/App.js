import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import ProductList from './components/products/ProductList'
import Banners from './components/banner/Banners'
import ShopBy from './components/sections/ShopBy'
import ShopByDiscount from './components/sections/ShopByDiscount'
import InfoSection from './components/sections/InfoSection'
import NewsLetter from './components/sections/NewsLetter'
import FooterMain from './components/footer/FooterMain'

function App() {
  return (
    <div className="app" style={{backgroundColor: "#f7f7f7"}}>
     <Header />
     <Hero />
      <ProductList />
      <Banners />
      <ShopBy />
      <ShopByDiscount />
      <InfoSection />
      <NewsLetter />
      <FooterMain />
    </div>
  );
}

export default App;
