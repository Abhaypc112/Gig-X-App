import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
