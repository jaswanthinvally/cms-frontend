import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/api/v1/signup' element={<Signup/>}/>
        <Route path='/api/v1/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
