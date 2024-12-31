import NamedLogo from '../../assets/NamedLogo.svg';
import Google from '../../assets/Google.svg';
import { NavLink } from 'react-router-dom';
function Signup() {
  return (
   <>
      <div className='w[100%] h-[695px] md:flex md:justify-evenly md:items-center space-y-5 mt-5'>
        <div className="left-side flex  justify-center">
          <img src={NamedLogo} alt="Logo" className='w-[15rem] h-[15rem]'/>
        </div>
        <div className="right-side flex justify-center">
          <div className="form-div glass">
            <form action="" className='flex flex-col justify-evenly h-[629px] items-center text-white'>
              <input type="text" placeholder='Email' name='email' className='w-[393px] h-[63px] rounded-lg bg-transparent border p-5 '/>
              <input type="text" placeholder='Username' name='email' className='w-[393px] h-[63px] rounded-lg bg-transparent border p-5'/>
              <input type="text" placeholder='Password' name='email' className='w-[393px] h-[63px] rounded-lg bg-transparent border p-5'/>
              <input type="text" placeholder='Conform password' name='email' className='w-[393px] h-[63px] rounded-lg bg-transparent border p-5'/>
              <div className='text-white w-[393px] space-x-3 '>
                <input type="checkbox" />
                <span className='text-neutral-400'>I agree to the</span><span><b>Terms & Conditions</b></span>
              </div>
              <button type='submit' className='w-[393px] h-[63px] rounded-lg  bg-yellow-500 font-bold text-xl text-black'>Sign Up</button>
              <button type='button' className='w-[393px] h-[63px] rounded-lg  border font-bold text-xl flex justify-center items-center space-x-3 text-white'><img src={Google} alt="google" /><span>Continue with Google</span></button>
              <div className='text-white space-x-3'><span className='text-neutral-400'>I have a account</span> <NavLink to='/login'><span className='cursor-pointer'><b>Login?</b></span></NavLink></div>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}

export default Signup
