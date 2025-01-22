import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/NavLogo.svg';
import { useAppDispatch } from '../../hooks/hooks';
import { userLogOut } from '../../redux/slices/auth/authSlice';
import { useState } from 'react';

function AdminNav() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logOutModal,setLogOutModal] = useState(false);
  const location = useLocation()
  const userName = localStorage.getItem("userName");
  const profileImg : any = localStorage.getItem("profileImg");

  const handleLogOut = async() => {
    await dispatch(userLogOut())
    navigate('/login')
  }
  
  return (
    <div className="flex justify-center p-5 fixed z-50 w-[100%] ">
      <div className="nav w-[95%] h-[95px] bg-black rounded-3xl flex justify-between items-center px-5">
        <div className="left flex w-[500px] justify-between items-center">
            <img src={NavLogo} alt="NavLogo" className='h-[50px]'/>
        </div>
        <div className="center ">
            <ul className='flex justify-between w-[300px]'>
              <NavLink to="/admin/dashboard"><li className={location.pathname === "/admin/dashboard"?'cursor-pointer text-yellow-500':'cursor-pointer'}>Dashboard</li></NavLink>
                <NavLink to="/admin/handle-gigs"><li className={location.pathname === "/admin/handle-gigs"?'cursor-pointer text-yellow-500':'cursor-pointer'}>Gigs</li></NavLink>
                <NavLink to="/admin/handle-orders"><li className={location.pathname === "/admin/handle-orders"?'cursor-pointer text-yellow-500':'cursor-pointer'}>Orders</li></NavLink>
                <NavLink to="/admin/handle-users"><li className={location.pathname === "/admin/handle-users"?'cursor-pointer text-yellow-500':'cursor-pointer'}>Users</li></NavLink>
            </ul>
        </div>
        <div className="right hidden lg:flex relative">
            <div onClick={()=>setLogOutModal(!logOutModal)} className='w-[260px] h-[65px] bg-[#575757] rounded-md flex justify-between px-3 items-center '>
            <div>
                <p className='text-xs'>Hello, Good Morning</p>
                <div className=" text-white  font-semibold ">{userName}</div>
                {
                  logOutModal?(
                    <div className='w-[16rem] h-[8rem] bg-black rounded-md z-50 absolute top-20 left-0 font-bold flex flex-col justify-evenly items-center'>
                      <button className="glass w-[90%] p-2 rounded-md">Profile</button>
                      <button onClick={handleLogOut} className="glass w-[90%] p-2 rounded-md">Log Out</button>
                    </div>
                  ):(
                    null
                  )
                }
            </div>
            <img className="w-[56.22px] h-[56.22px] rounded-full" src={profileImg} alt='profile-img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNav
