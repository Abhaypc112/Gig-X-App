// // src/pages/GoogleCallback.tsx
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/userSlice'; // Update with correct path

// const GoogleCallback = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Parse user data from the URL query parameter
//     const query = new URLSearchParams(window.location.search);
//     const userData = query.get('user');
//     if (userData) {
//       dispatch(setUser(JSON.parse(userData))); // Dispatch user data to Redux
//     }
//   }, [dispatch]);

//   return <div>Welcome! You're logged in with Google.</div>;
// };

// export default GoogleCallback;