import React from 'react'
import ListPage from './pages/ListPage/ListPage.jsx'
import NewRecord from './pages/NewRecord/NewRecord.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/New' element={<NewRecord />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
