import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Action from './Pages/Action'
import Comedy from './Pages/Comedy'
import Anime from './Pages/Anime'
import Romance from './Pages/Romance'





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Action' element={ <Action/> }/>
        <Route path='/Comedy' element={<Comedy/>}/>
        <Route path='/Anime' element={<Anime/>}/>
        <Route path='/Romance' element={<Romance/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
