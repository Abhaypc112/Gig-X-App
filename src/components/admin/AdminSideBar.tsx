
import AdminProfile from '../../assets/AdminProfile.svg';

function AdminSideBar() {
  
  return (
       <div className="lg:flex hidden glass w-[245px] h-[580px] rounded-xl flex-col  justify-evenly fixed z-50  mt-[9rem] ml-[4rem] ">
            <div className="top-side h-[20%] flex justify-evenly flex-col items-center space-y-5">
                <img src={AdminProfile} alt="Profile" className='rounded-full w-[70px]'/>
                <button className='glass px-5 rounded-sm'>Profile</button>
            </div>
            <div className="bottom-side h-[50%] flex flex-col space-y-5 items-center">
                <button className='glass-btn w-[80%] h-10 rounded-md  text-left pl-5'>Dashboard</button>
                <button className='glass-btn w-[80%] h-10 rounded-md text-left pl-5'>Users</button>
                <button className='glass-btn w-[80%] h-10 rounded-md text-left pl-5'>Gigs</button>
                <button className='glass-btn w-[80%] h-10 rounded-md text-left pl-5'>Payment</button>
                <button className='glass-btn w-[80%] h-10 rounded-md text-left pl-5'>Log Out</button>
            </div>
       </div>
  )
}

export default AdminSideBar
