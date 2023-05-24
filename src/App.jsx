

import { BrowserRouter,   Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'


import Mercury from './components/Mercury'
import Venus from './components/venus'
import Mars from './components/Mars'
import Earth from './components/Earth'
import Jupiter from './components/Jupiter'
import Saturn from './components/Saturn'
import Uranus from './components/Uranus'
import Neptune from './components/Neptune'

// import './App.css'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
              <Route index  element={<Mercury />}/>
              <Route path='venus' element={<Venus />} />
              <Route path='mars' element={<Mars />} />
              <Route path='earth' element={<Earth />} />
              <Route path='jupiter' element={<Jupiter />} />
              <Route path='saturn' element={<Saturn />} />
              <Route path='uranus' element={<Uranus />} />
              <Route path='neptune' element={<Neptune />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
