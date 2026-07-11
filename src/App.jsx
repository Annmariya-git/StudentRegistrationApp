import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './components/AddRegistration'
import SearchRegistration from './components/SearchRegistration'
import DeleteRegistration from './components/DeleteRegistration'
import ViewRegistration from './components/ViewRegistration'
import NavRegistration from './components/NavRegistration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddRegistration />} />
        <Route path='/Search' element={<SearchRegistration />} />
        <Route path='/Delete' element={<DeleteRegistration />} />
        <Route path='/View' element={<ViewRegistration />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
