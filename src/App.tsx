import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminProtectedRoute from './routes/admin/AdminProtectedRoute'
import AuthProtuctRouter from './routes/auth/AuthProtuctRouter'
import { AdminRoutes } from './routes/admin/AdminRoutes'
import AdminLayout from './Layout/AdminLayout'
import UserProtuctRoute from './routes/user/UserProtuctRoute'
import { UserRoutes } from './routes/user/UserRoutes'
import FreelancerProtuctRoute from './routes/freelancer/FreelancerProtuctRoute'
import { FreelancerRoutes } from './routes/freelancer/FreelancerRoutes'
import FreelancerLayout from './Layout/FreelancerLayout'
import UserLayout from './Layout/UserLayout'
import {AuthRoutes} from './routes/auth/AuthRoutes';


const App : React.FC = () => {
 
  return (
    <>
      <Routes>
        <Route element={<AuthProtuctRouter/>}>
          {AuthRoutes.length>0 && AuthRoutes.map(({path,element}:any,index: number) => {
            return <Route key={index} path={path} element={element}/>
          })}
        </Route>
        <Route element={<AdminProtectedRoute/>}>
          {AdminRoutes.length>0 && AdminRoutes.map(({path,element}:any,index: number) => {
            return <Route key={index} path={path} element={<AdminLayout>{element}</AdminLayout>} />
          })}
        </Route>
        <Route element={<UserProtuctRoute/>}>
        {UserRoutes.length>0 && UserRoutes.map(({path,element}:any,index: number) => {
            return <Route key={index} path={path} element={<UserLayout>{element}</UserLayout>} />
          })}
        </Route>
        <Route element={<FreelancerProtuctRoute/>}>
        {FreelancerRoutes.length>0 && FreelancerRoutes.map(({path,element}:any,index: number) => {
            return <Route key={index} path={path} element={<FreelancerLayout>{element}</FreelancerLayout>} />
          })}
        </Route>
      </Routes>
    </>
  )
}

export default App
