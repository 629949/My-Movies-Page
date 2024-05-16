import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'






function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
        <HomePage/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
