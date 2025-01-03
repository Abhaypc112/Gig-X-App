import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ClientDashbord from './pages/client/ClientDashbord'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/client-dashboard' element={<ClientDashbord/>}/>
      </Routes>
    </>
  )
}

export default App
