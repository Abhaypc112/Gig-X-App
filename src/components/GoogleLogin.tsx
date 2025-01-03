
const GoogleLogin = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; 
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default GoogleLogin;
