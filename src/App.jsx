import React from 'react'
import "./css/App.css";

import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Favorites from './pages/Favorites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './contexts/MovieContext';
  

const App = () => {
  return (
    < MovieProvider>
      <NavBar/>
<main className='main-content'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/favorites' element={<Favorites/>}/>

</Routes>
</main>
    </ MovieProvider>
  )
}

export default App