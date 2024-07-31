import React from 'react'
import girls_banner from './assets/girls_banner.png';
import cocoa_idol from './assets/cocoa_idol.webp'
import './App.css';

const App = () => {
  return (
    <div>
      <img src={girls_banner} alt="girls_banner" className="girls-banner"/>
      <img src={cocoa_idol} alt="cocoa_banner" className="cocoa-idol"/>
    </div>
  )
}

export default App