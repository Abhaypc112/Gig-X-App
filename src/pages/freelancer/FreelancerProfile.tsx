import { useNavigate } from 'react-router-dom'
import Profile from '../../assets/Logo.png'

const FreelancerProfile = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[full] flex justify-center">
      <div className="grid grid-cols-4 grid-rows-7 w-[90%] mt-[9rem] gap-5 ">
        <div className=" row-span-7 grid grid-rows-7 gap-5 max-w-10 ">
            <div className="glass rounded-md h-[15rem] flex flex-col items-center p-10 space-y-2  w-[20rem]">
                <img src={Profile} alt="profile" className='w-24 h-24 rounded-full'/>
                <h1 className='font-bold'>Freelancer</h1>
                <div className='w-[100%] space-y-2'>
                    <div  className='flex justify-between w-[100%] text-xs'><span className='font-bold'>From</span> <span className='text-[#A9A9A9]'>Calicut</span></div>
                    <div  className='flex justify-between w-[100%] text-xs' ><span className='font-bold'>Member since</span> <span className='text-[#A9A9A9]'>2024</span></div>
                </div>
            </div>
            <div className="glass rounded-md h-[15rem]  w-[20rem]">
                <div className='flex justify-between p-5'>
                    <h1 className='font-bold'>Discription</h1>
                    <button className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className=''>
                    <p className='p-5 text-sm text-[#A9A9A9]'>
                        ffnsdnfsdfndskfjnasdkfnsdfgg
                        kndsfnasdfldskafndlfnsdfnsad;fgbdf
                        sdfsfsdfsdfsffffsf
                        fsdfknslfnnnasdfklsafsafhdd
                        ghdrghg
                    </p>
                </div>
            </div>
            <div className="glass rounded-md h-[15rem] w-[20rem]">
                <div className='flex justify-between p-5'>
                    <h1 className='font-bold'>Language</h1>
                    <button className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className='p-5 text-sm text-[#A9A9A9]'>
                    Malayalam, 
                    English
                </div>
            </div>
            <div className="glass rounded-md h-[15rem] w-[20rem]">
                <div className='flex justify-between p-5'>
                    <h1 className='font-bold'>Skills</h1>
                    <button className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className='p-5 text-sm text-[#A9A9A9]'>
                    Web developer
                </div>
            </div>
            <div className="glass rounded-md h-[15rem] w-[20rem]">
                <div className='flex justify-between p-5'>
                    <h1 className='font-bold'>Education</h1>
                    <button className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className="p-5 text-sm text-[#A9A9A9]">
                    Bsc computer science
                </div>
            </div>
            <div className="glass rounded-md h-[15rem] w-[20rem]">
                <div className='flex justify-between p-5'>
                    <h1 className='font-bold'>Certificates</h1>
                    <button className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className='p-5 text-sm text-[#A9A9A9]'>
                    null
                </div>
            </div>

        </div> 
        <div className=" col-span-3 row-span-7 space-y-5">
            <div className="glass h-20 rounded-md flex justify-between items-center px-5">
                <button className="glass px-5 p-3 rounded-md font-bold text-xs">TOTAL GIGS</button>
                <button onClick={()=>navigate('/freelancer/create-gig')} className="glass px-5 p-3 rounded-md font-bold text-xs text-yellow-500">CREATE GIG</button>
            </div>
            <div className="flex gap-9">
            <div className="glass rounded-md h-[18rem] w-[20rem] p-3 space-y-3">
                <img className='h-[10rem] w-full rounded-md' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/172611883/original/ba426ac5bf27e15e18e938e3ef629fcadf2821cf/do-modern-minimalist-luxury-logo-design.jpg" alt="gig" />
                <p className='text-sm text-[#A9A9A9]'>I will do modern minimalist 
                    professional logo design</p>
                    <div className='flex justify-between'>
                    <button className='glass px-3 rounded text-xs'>Edit</button>
                    <h1 className='font-bold'>₹ 6999</h1>
                </div>
            </div>
            <div className="glass rounded-md h-[18rem] w-[20rem] p-3 space-y-3">
                <img className='h-[10rem] w-full rounded-md' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/299960476/original/9c4dcad9bc040260cd9b8bf71e7d4ca5ffc895f1/develop-saas-application-of-any-level-of-complexity.png" alt="gig" />
                <p className='text-sm text-[#A9A9A9]'>I will do modern minimalist 
                    professional logo design</p>
                    <div className='flex justify-between'>
                    <button className='glass px-3 rounded text-xs'>Edit</button>
                    <h1 className='font-bold'>₹ 7999</h1>
                </div>
            </div>
            <div className="glass rounded-md h-[18rem] w-[20rem] p-3 space-y-3">
                <img className='h-[10rem] w-full rounded-md' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="gig" />
                <p className='text-sm text-[#A9A9A9]'>I will do modern minimalist 
                    professional logo design</p>
                    <div className='flex justify-between'>
                    <button className='glass px-3 rounded text-xs'>Edit</button>
                    <h1 className='font-bold'>₹ 5999</h1>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FreelancerProfile
