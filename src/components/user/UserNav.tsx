
import NavLogo from '../../assets/NavLogo.svg';
import SearchIcon from '../../assets/Searchicon.svg';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAppDispatch } from '../../hooks/hooks';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userLogOut } from '../../redux/slices/auth/authSlice';
import { MdOutlineShoppingCart } from "react-icons/md";
 
const UserNav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logOutModal,setLogOutModal] = useState(false);
  const userName = localStorage.getItem('userName');
  
  const handleLogOut = async() => {
    await dispatch(userLogOut())
    navigate('/login')
  }
  return (
    <div className="flex justify-center p-5 z-50 w-[100%] fixed backdrop-blur">
      <div className="nav w-[95%] h-[95px] bg-black rounded-3xl flex justify-between items-center px-5">
        <div className="left flex w-[500px] justify-between items-center">
            <img onClick={()=>navigate('/home')} src={NavLogo} alt="NavLogo" className='h-[50px]'/>
            <div className='relative hidden md:flex'>
                <input type="text" className='w-[300px] h-[45px] rounded-md text-[#a9a9a9] bg-[#464646] focus:outline-none pl-3' placeholder='Search your design' />
                <img src={SearchIcon} alt="search" className='absolute z-10 right-3 top-3'/>
            </div>
        </div>
        <div className="center ">
            <ul className='flex justify-end space-x-5 w-[300px] '>
              <NavLink to='/orders'><MdOutlineShoppingCart className='w-12 h-12 bg-[#222222] p-3 rounded-full'/></NavLink>
              <FaRegHeart className='w-12 h-12 bg-[#222222] p-3 rounded-full'/>
              <MdOutlineMail className='w-12 h-12 bg-[#222222] p-3 rounded-full' />
              <IoNotificationsOutline className='w-12 h-12 bg-[#222222] p-3 rounded-full' />
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
            <img className="w-[56.22px] h-[56.22px] rounded-full" src="https://via.placeholder.com/56x56" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserNav
