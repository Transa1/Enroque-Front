import React from 'react'
import Navbar from './../Shared/Navbar'
import Hero from './Hero'
import Footer from '../Shared/Footer'
import FAQ from './FAQ/FAQ'
import Message from './Message'
import Reviews from './Reviews'
import About from './About'

const Home = () => {
  return (
    <div className='overflox-hidden'>
      <Navbar />
      <Hero />
      <About />
      <div className="relative overflow-hidden bg-white">
        <Message />
        <Reviews />
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
