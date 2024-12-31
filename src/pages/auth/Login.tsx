import NamedLogo from '../../assets/NamedLogo.svg';
import Google from '../../assets/Google.svg';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='w[100%] h-[695px] md:flex md:justify-evenly md:items-center space-y-5 mt-5'>
        <div className="left-side flex  justify-center">
          <img src={NamedLogo} alt="Logo" className='w-[15rem] h-[15rem]'/>
        </div>
        <div className="right-side flex justify-center">
          <div className="form-div glass ">
            <form action="" className='flex flex-col justify-evenly h-[629px] items-center text-white'>
              <h1 className='text-4xl text-white font-bold w-[393px]'>Hello Again !</h1>
              <p className='text-xl text-neutral-400 w-[393px]'>Welcome back</p>
              <input type="text" placeholder='Email' name='email' className='w-[393px] h-[63px] rounded-lg bg-transparent border p-5'/>
              <input type="text" placeholder='Password' name='email' className='w-[393px] h-[63px] rounded-lg bg-transparent border p-5'/>
              <div className='text-white w-[393px] space-x-3 flex items-center '>
                <input type="checkbox" />
                <span className='text-neutral-400  w-[393px] flex justify-between'><span>Remember me</span><span className='cursor-pointer'>Forget password ?</span></span>
              </div>
              <button type='submit' className='w-[393px] h-[63px] rounded-lg  bg-yellow-500 font-bold text-xl text-black'>Sign Up</button>
              <button type='button' className='w-[393px] h-[63px] rounded-lg  border font-bold text-xl flex justify-center items-center space-x-3 text-white'><img src={Google} alt="google" /><span>Continue with Google</span></button>
              <div className='text-white space-x-3'><span className='text-neutral-400'>I have a account</span><NavLink to='/'><span className='cursor-pointer'><b>Login?</b></span></NavLink></div>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}

export default Login
