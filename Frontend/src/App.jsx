import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
 
function App(){
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/api/about' element={<About />} />
      <Route path='/api/contact' element={<Contact />} />
      <Route path='/api/register' element={<Register />} />
    </Routes>
  )
}

export default App
