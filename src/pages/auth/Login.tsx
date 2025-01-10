import NamedLogo from '../../assets/NamedLogo.svg';
import Google from '../../assets/Google.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { LoginVlidation } from '../../validation/LoginValidation';

function Login() {
  const [loginData,setLoginData] = useState ({
    email:"",
    password:""
  });
  const dispatch = useDispatch <AppDispatch> ();
  const {error} = useSelector((state:RootState)=>state.auth);
  const role = localStorage.getItem("role");
  const [loginError,setLoginError] = useState({email:"",password:""});
  const navigate = useNavigate();

  useEffect(()=>{
    if(role === "user")navigate('/user/home') 
    if(role === "freelancer")navigate('/freelancer/dashboard') 
    if(role === "admin")navigate('/admin/dashboard') 
  },[role])


  const handleOnChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;
    setLoginData({...loginData,[name]:value});
  };
  const handleOnSubmit = async (event :React.FormEvent) => {
    event.preventDefault();
    const valErrors = await LoginVlidation(loginData);
    if(Object.values(valErrors).every((error) => error === '')){
      await dispatch(loginUser(loginData))
    }
    setLoginError(valErrors)
  }

  return (
    <>
      <div className='w[100%] min-h-screen md:flex md:justify-evenly md:items-center space-y-5'>
        <div className="left-side flex  justify-center">
          <img src={NamedLogo} alt="Logo" className='w-[15rem] h-[15rem]'/>
        </div>
        <div className="right-side flex justify-center">
          <div className="form-div glass w-[90%] md:w-[493px]">
            <form onSubmit={handleOnSubmit} className='flex flex-col justify-evenly h-[629px] items-center text-white'>
            <p className='text-red-500'>{error}</p>
              <h1 className='text-4xl text-white font-bold w-[80%]'>Hello Again !</h1>
              <p className='text-xl text-neutral-400 w-[80%]'>Welcome back</p>
              <p className='text-red-500 text-xs w-[80%]'>{loginError.email}</p>
              <input onChange={handleOnChange} type="text" placeholder='Email' name='email' value={loginData.email} className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5'/>
              <p className='text-red-500 text-xs w-[80%]'>{loginError.password}</p>
              <input onChange={handleOnChange} type="password" placeholder='Password' name='password' value={loginData.password} className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5'/>
              <div className='text-white w-[80%] space-x-3 flex items-center '>
                <input type="checkbox" />
                <span className='text-neutral-400  w-[100%] flex justify-between'><span>Remember me</span><span className='cursor-pointer'>Forget password ?</span></span>
              </div>
              <button type='submit' className='w-[80%] h-[63px] rounded-lg  bg-yellow-500 font-bold text-xl text-black'>Login</button>
              <button type='button' className='w-[80%] h-[63px] rounded-lg  border font-bold text-xl flex justify-center items-center space-x-3 text-white'><img src={Google} alt="google" /><span>Continue with Google</span></button>
              <div className='text-white space-x-3'><span className='text-neutral-400'>I have a account</span><NavLink to='/option'><span className='cursor-pointer'><b>Sign Up?</b></span></NavLink></div>
            </form>
          </div>
        </div>
      </div>
   </>
  )
}

export default Login
