import  Blog from './components/Blog'
import  Home  from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default App


