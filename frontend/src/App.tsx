import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route path="/register" element={<register />} />
      



     </Routes>
     
     </BrowserRouter>


    </>
  )
}

export default App
