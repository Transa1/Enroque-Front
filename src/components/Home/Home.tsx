import React from 'react'
import Navbar from './../Shared/Navbar'
import Hero from './Hero'
import Footer from '../Shared/Footer'
import FAQ from './FAQ/FAQ'

const Home = () => {
  return (
    <div className='overflox-hidden'>
      <Navbar />
      <Hero />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
