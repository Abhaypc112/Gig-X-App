import { NavLink, useNavigate } from "react-router-dom"
import NavLogo from '../../assets/NavLogo.svg';
import SearchIcon from '../../assets/Searchicon.svg';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import { userLogOut } from "../../redux/slices/auth/authSlice";


const FreelancerNav = () => {
  const [logOutModal,setLogOutModal] = useState(false);
  const {user} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(user)

  const handleLogOut = async() => {
    await dispatch(userLogOut())
    navigate('/login')
  }

  return (
    <div className="flex justify-center p-5 fixed z-50 w-[100%] backdrop-blur">
      <div className="nav w-[95%] h-[95px] bg-black rounded-3xl flex justify-between items-center px-5">
        <div className="left flex w-[500px] justify-between items-center">
            <img src={NavLogo} alt="NavLogo" className='h-[50px]'/>
            <div className='relative hidden md:flex'>
                <input type="text" className='w-[300px] h-[45px] rounded-md text-[#a9a9a9] bg-[#464646] focus:outline-none pl-3' placeholder='Search your design' />
                <img src={SearchIcon} alt="search" className='absolute z-10 right-3 top-3'/>
            </div>
        </div>
        <div className="center ">
            <ul className='flex justify-between w-[300px]'>
                <NavLink to="/freelancer/dashboard"><li className='cursor-pointer'>Dashboard</li></NavLink>
                <NavLink to="/freelancer/handle-gigs"><li className='cursor-pointer'>Gigs</li></NavLink>
                <NavLink to="/freelancer/handle-orders"><li className='cursor-pointer'>Orders</li></NavLink>
                <NavLink to="/freelancer/profile"><li className='cursor-pointer'>Profile</li></NavLink>
            </ul>
        </div>
        <div className="right hidden lg:flex relative">
            <div onClick={()=>setLogOutModal(!logOutModal)} className='w-[260px] h-[65px] bg-[#575757] rounded-md flex justify-between px-3 items-center '>
            <div>
                <p className='text-xs'>Hello, Good Morning</p>
                <div className=" text-white  font-semibold ">Freelancer</div>
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

export default FreelancerNav
