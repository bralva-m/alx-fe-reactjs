import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'


function App() {
  
  return (
    <>
      <Header />
      <UserProfile />
      <MainContent />
      <Footer />
      <Counter />
    </>
  )
}

export default App;
