import NamedLogo from '../../assets/NamedLogo.svg';
import Google from '../../assets/Google.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateOtp, signupUser } from '../../redux/slices/authSlice';
import { AppDispatch, RootState } from '../../redux/store';
import LoadingPage from '../../components/LoadingPage';
import { SignupValidation } from '../../validation/SignupValidation';

function Signup() {
  const [signupData,setSignupData] = useState({
    email:"",
    name:"",
    password:"",
    conformPassword:"",
    otp:""
  });
  const [otpPage,setOtpPage] = useState(false);
  const [signupError,setSignupError] = useState({name:"",email:"",password:"",conformPassword:""})
  const dispatch = useDispatch<AppDispatch>();
  const {loading,error,user} = useSelector((state:RootState)=>state.auth)
  const navigate = useNavigate();

  useEffect(()=>{
    if(user)navigate('/client-dashboard') 
  },[user])

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;
    setSignupData({...signupData,[name]:value});
  };
  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    const valErrors = await SignupValidation(signupData);
    if(Object.values(valErrors).every((error) => error === '')){
      await dispatch(generateOtp(signupData.email))
      setOtpPage(true);
    }
    setSignupError(valErrors)
  }
  const handleOnSubmit = async(event: React.FormEvent) =>{
    event.preventDefault();
    await dispatch(signupUser(signupData))
    if (error)navigate('/login')  
    
  };
  const handleGoogleAuth = async () => {
    try {
      if ((window as any).gapi) {
        const googleAuth = (window as any).gapi.auth2.getAuthInstance();
        const googleUser = await googleAuth.signIn();
        const idToken = googleUser.getAuthResponse().id_token;

        await dispatch(googleAuth(idToken)).unwrap();
      } else {
        console.error('Google API is not initialized.');
      }
    } catch (err) {
      console.error('Google Login Error:', err);
    }
  }
  if(loading) {
    return <LoadingPage/>
  }
  return (
   <>
      {!otpPage?(
        <div className='w[100%] min-h-screen md:flex md:justify-evenly md:items-center space-y-5 '>
        <div className="left-side flex  justify-center">
       <img src={NamedLogo} alt="Logo" className='w-[15rem] h-[15rem]'/>
     </div>
     <div className="right-side flex justify-center">
       <div className="form-div glass w-[90%] md:w-[493px]">
        <form className='flex flex-col justify-evenly h-[629px] items-center text-white'>
            <p className='text-red-500'>{error}</p>
            <p className='text-red-500 text-xs w-[80%]'>{signupError.email}</p>
           <input onChange={handleOnChange} type="text" placeholder='Email' name='email' value={signupData.email} className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5 '/>
           <p className='text-red-500 text-xs w-[80%]'>{signupError.name}</p>
           <input onChange={handleOnChange} type="text" placeholder='Name' name='name' value={signupData.name} className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5'/>
           <p className='text-red-500 text-xs w-[80%]'>{signupError.password}</p>
           <input onChange={handleOnChange} type="password" placeholder='Password' name='password' value={signupData.password} className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5'/>
           <p className='text-red-500 text-xs w-[80%]'>{signupError.conformPassword}</p>
           <input onChange={handleOnChange} type="password" placeholder='Conform password' value={signupData.conformPassword} name='conformPassword' className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5'/>
           <div className='text-white w-[80%] space-x-3 '>
             <input type="checkbox" />
             <span className='text-neutral-400'>I agree to the</span><span><b>Terms & Conditions</b></span>
           </div>
           <button type='button' onClick={handleSignUp} className='w-[80%] h-[63px] rounded-lg  bg-yellow-500 font-bold text-xl text-black'>Sign Up</button>
           <button type='button' onClick={handleGoogleAuth} className='w-[80%] h-[63px] rounded-lg  border font-bold text-xl flex justify-center items-center space-x-3 text-white'><img src={Google} alt="google" /><span>Continue with Google</span></button>
           <div className='text-white space-x-3'><span className='text-neutral-400'>I have a account</span> <NavLink to='/login'><span className='cursor-pointer'><b>LogIn?</b></span></NavLink></div>
         </form>
       </div>
     </div>
      </div>
      ):(
        <div className='w[100%] h-[695px] md:flex md:justify-evenly md:items-center space-y-5 mt-5'>
        <div className="left-side flex  justify-center">
          <img src={NamedLogo} alt="Logo" className='w-[15rem] h-[15rem]'/>
        </div>
        <div className="right-side flex justify-center">
          <div className="form-div glass w-[90%] md:w-[493px]">
            <form onSubmit={handleOnSubmit} className='flex flex-col justify-evenly h-[629px] items-center text-white'>
              <p className='text-red-500'>{error}</p>
              <h1 className='text-4xl text-white font-bold w-[80%]'>OTP has  been sent to </h1>
              <p className='text-xl text-neutral-400 w-[80%]'>{signupData.email}</p>
              <input onChange={handleOnChange} type="text" placeholder='Enter the OTP' name='otp' value={signupData.otp} className='w-[80%] h-[63px] rounded-lg bg-transparent border p-5'/>
              <button type='submit' className='w-[80%] h-[63px] rounded-lg  bg-yellow-500 font-bold text-xl text-black'>Verify OTP</button>
              <button type='button' className='w-[80%] h-[63px] rounded-lg  border font-bold text-xl flex justify-center items-center space-x-3 text-white'><img src={Google} alt="google" /><span>Continue with Google</span></button>
              <div className='text-white space-x-3'><span className='text-neutral-400'>I have a account</span><NavLink to='/login'><span className='cursor-pointer'><b>LogIn?</b></span></NavLink></div>
            </form>
          </div>
        </div>
      </div>
      )}
   </>
  )
}

export default Signup
