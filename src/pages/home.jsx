import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Paricles from '../components/Paricles';

function Home() {
  
  return (
    <div>
        <Navbar/>
        <Paricles/>
        <Hero/>
        <Card/>
        <Footer />
    </div>
  )
}

export default Home;