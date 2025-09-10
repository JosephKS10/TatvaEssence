import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import GardensService from './pages/GardensService/GardenService'
import StoreService from './pages/StoreService/StoreService'
import WorkshopsGiftingService from './pages/WorkshopsService/Workshops'
import SplashScreen from './pages/SplashScreen/SplashScreen'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gardens" element={<GardensService />} />
          <Route path="/store" element={<StoreService />} />
          <Route path="/workshops" element={<WorkshopsGiftingService />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
