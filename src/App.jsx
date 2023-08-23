
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Error from "./pages/Error"

import CarFinder from "./pages/project pages/CarFinder"


function App() {

  return (
      <div className="App">
      <Routes>


              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="carfinder" element={<CarFinder />} />
             
            
          


            <Route path="" element={<Error />} />

      </Routes>

      </div>
  )
}

export default App
