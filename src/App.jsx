import React from 'react'
import Header from './components/header/Header'
import styles from './app.module.css'
import "./index.css"
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default App