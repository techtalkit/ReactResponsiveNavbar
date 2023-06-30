import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <h1>Welcome to</h1>
        <h1>Thapa Technical Home Page</h1>
      </section>
    </>
  )
}
const About = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <h1>Welcome to</h1>
        <h1>Thapa Technical About Page</h1>
      </section>
    </>
  )
}
const Services = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <h1>Welcome to</h1>
        <h1>Thapa Technical Services Page</h1>
      </section>
    </>
  )
}
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <h1>Welcome to</h1>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  )
}

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App