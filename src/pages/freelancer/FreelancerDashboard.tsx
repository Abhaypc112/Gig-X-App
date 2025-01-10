import Profile from '../../assets/Logo.png'

function FreelancerDashboard() {
  return (
    <div className="w-[full] flex justify-center min-h-screen">
      <div className="grid grid-cols-4 grid-rows-4 w-[90%] mt-[9rem] gap-5 ">
        <div className="row-span-3 rounded-md grid grid-rows-2 gap-5">
          <div className="glass rounded-md flex flex-col items-center p-10 space-y-2">
            <img src={Profile} alt="profile" className='w-32 h-32 rounded-full'/>
            <h1 className='font-bold'>Freelancer</h1>
            <button className='glass p-1 px-5 rounded-md'>Profile</button>
          </div> 
          <div className="glass rounded-md flex flex-col space-y-5 justify-center items-center">
            <h1 className='font-bold text-3xl'>Rating</h1>
            <h1 className='font-bold text-xl'>⭐4.5 </h1>  
          </div>  
        </div>  
        <div className="glass rounded-md flex flex-col space-y-5 justify-center items-center">
          <h1>Total Earnings</h1>
          <h1 className='font-bold text-3xl'>₹ 24999</h1>
        </div>  
        <div className="glass rounded-md flex flex-col space-y-5 justify-center items-center">
          <h1>Total Gigs</h1>
          <h1 className='font-bold text-3xl'>24</h1>  
        </div>  
        <div className="glass rounded-md flex flex-col space-y-5 justify-center items-center">
          <h1>Total Clients</h1>
          <h1 className='font-bold text-3xl'>14</h1>  
        </div>  
        <div className="glass rounded-md flex flex-col space-y-5 justify-center items-center">
          <h1>Total Orders</h1>
          <h1 className='font-bold text-3xl'>24</h1>  
        </div>  
      </div>
    </div>
  )
}

export default FreelancerDashboard
