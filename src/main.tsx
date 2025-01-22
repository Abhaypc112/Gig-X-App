import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/store.ts';
import { Provider } from 'react-redux';
import {GoogleOAuthProvider} from '@react-oauth/google';

const CLIENTID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={CLIENTID}>
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
  </GoogleOAuthProvider>
)
