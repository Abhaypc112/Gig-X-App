import { NavLink } from 'react-router-dom';
import NavLogo from '../../assets/NavLogo.svg';
import SearchIcon from '../../assets/Searchicon.svg';

function AdminNav() {
  return (
    <div className="flex justify-center p-5 fixed z-50 w-[100%] ">
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
              <NavLink to="/admin/dashboard"><li className='cursor-pointer'>Dashboard</li></NavLink>
                <NavLink to="/admin/handle-gigs"><li className='cursor-pointer'>Gigs</li></NavLink>
                <NavLink to="/admin/handle-orders"><li className='cursor-pointer'>Orders</li></NavLink>
                <NavLink to="/admin/handle-users"><li className='cursor-pointer'>Users</li></NavLink>
            </ul>
        </div>
        <div className="right hidden lg:flex">
            <div className='w-[260px] h-[65px] bg-[#575757] rounded-md flex justify-between px-3 items-center'>
            <div>
                <p className='text-xs'>Hello, Good Morning</p>
                <div className=" text-white  font-semibold ">Muhammed Muhsin P</div>
            </div>
            <img className="w-[56.22px] h-[56.22px] rounded-full" src="https://via.placeholder.com/56x56" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNav