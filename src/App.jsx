import  Blog from './components/Blog'
import  Home  from './components/Home'
import  Clases  from './components/Clases'
import  SobreMi  from './components/SobreMi'
import  Eventos  from './components/Eventos'
import  Recursos  from './components/Recursos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  
  return (
    <BrowserRouter basename="AdLibitum/root">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/clases" element={<Clases />} />
    <Route path="/about-me" element={<SobreMi />} />
    <Route path="/eventos" element={<Eventos />} />
    <Route path="/recursos" element={<Recursos />} />
    

    </Routes>
    </BrowserRouter>
    
  )
}

export default App


