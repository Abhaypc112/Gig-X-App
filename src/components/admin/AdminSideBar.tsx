
import { useLocation, useNavigate } from 'react-router-dom';
import AdminProfile from '../../assets/AdminProfile.svg';
import { useAppDispatch } from '../../hooks/hooks';
import { userLogOut } from '../../redux/slices/auth/authSlice';

function AdminSideBar() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogOut = async() => {
      await dispatch(userLogOut())
      navigate('/login')
    }
  return (
       <div className="lg:flex hidden bg-black w-[245px] h-[580px] rounded-xl flex-col  justify-evenly fixed z-50  mt-[9rem] ml-[4rem] ">
            <div className="top-side h-[20%] flex justify-evenly flex-col items-center space-y-5">
                <img src={AdminProfile} alt="Profile" className='rounded-full w-[70px]'/>
                <button className='glass px-5 rounded-sm'>Profile</button>
            </div>
            <div className="bottom-side h-[60%] flex flex-col space-y-5 items-center">
                <button onClick={()=>navigate("/admin/dashboard")} className={location.pathname === "/admin/dashboard" ? 'glass w-[80%] h-10 rounded-md  text-left pl-5' :'glass-btn hover:bg-gray-900 w-[80%] h-10 rounded-md  text-left pl-5'}>Dashboard</button>
                <button onClick={()=>navigate("/admin/handle-users")} className={location.pathname === "/admin/handle-users" ? 'glass w-[80%] h-10 rounded-md  text-left pl-5' :'glass-btn hover:bg-gray-900 w-[80%] h-10 rounded-md  text-left pl-5'}>Users</button>
                <button onClick={()=>navigate("/admin/handle-gigs")} className={location.pathname === "/admin/handle-gigs" ? 'glass w-[80%] h-10 rounded-md  text-left pl-5' :'glass-btn hover:bg-gray-900 w-[80%] h-10 rounded-md  text-left pl-5'}>Gigs</button>
                <button onClick={()=>navigate("/admin/handle-orders")} className={location.pathname === "/admin/handle-orders" ? 'glass w-[80%] h-10 rounded-md  text-left pl-5' :'glass-btn hover:bg-gray-900 w-[80%] h-10 rounded-md  text-left pl-5'}>Orders</button>
                <button onClick={()=>navigate("/admin/handle-category")} className={location.pathname === "/admin/handle-category" ? 'glass w-[80%] h-10 rounded-md  text-left pl-5' :'glass-btn hover:bg-gray-900 w-[80%] h-10 rounded-md  text-left pl-5'}>Category</button>
                <button onClick={handleLogOut} className='glass-btn w-[80%] h-10 rounded-md text-left pl-5'>Log Out</button>
            </div>
       </div>
  )
}

export default AdminSideBar
