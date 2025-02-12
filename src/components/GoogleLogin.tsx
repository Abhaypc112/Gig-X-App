import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Google from '../../src/assets/Google.svg';

const GoogleLogin: React.FC = () => {
  const navigate = useNavigate();
  const {option} = useParams();

  const googleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const data = { credentialResponse,option };
        const response = await axios.post('https://gig-x-server.onrender.com/api/auth/google', data);
        console.log(response.data)
        const { accessToken, user } = response.data.userData;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('role', user.role);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('profileImg', user.profileImg);

        if (user.role === 'user') navigate('/home');
        if (user.role === 'freelancer') navigate('/freelancer/dashboard');
      } catch (error) {
        console.error('Google Login Error:', error);
      }
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return (
    <button onClick={()=>googleLogin()} type='button' className='w-[80%] h-[63px] rounded-lg  border font-bold text-xl flex justify-center items-center space-x-3 text-white'><img src={Google} alt="google" /><span>Continue with Google</span></button>
  );
};

export default GoogleLogin;
