import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LogIn from './pages/index.js'
import Tasks from './pages/taskCreator.js';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<h1>HOLA</h1>}> </Route>
      <Route path='/login' element={ LogIn() }> </Route>
      <Route path='/tasks' element={ Tasks() }> </Route>
      </Routes>
      </BrowserRouter>
    );
}

export default App;
