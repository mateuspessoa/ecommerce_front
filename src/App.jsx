import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import Detalhes from './pages/Detalhes'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
      </Routes>
    </Router>
  )
}

export default App
