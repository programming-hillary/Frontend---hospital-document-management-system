import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './app/app';
import { Login } from '@org.mwashi-mwale/login';
import { SignUp } from '@org.mwashi-mwale/sign-up';
import { Homepage } from '@org.mwashi-mwale/homepage';
import { VerifyEmail } from '@org.mwashi-mwale/verify-email';
import { ForgotPassword } from '@org.mwashi-mwale/forgot-password';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        {/* ... etc. */}
      </Route>
      <Route path="/login" element={<Login />}>
        {/* ... etc. */}
      </Route>
      <Route path="/register" element={<SignUp />}>
        {/* ... etc. */}
      </Route>
      <Route path="/dashboard" element={<Homepage />}>
        {/* ... etc. */}
      </Route>
      <Route path="/verify_email" element={<VerifyEmail />}>
        {/* ... etc. */}
      </Route>
      <Route path="/forgot_password" element={<ForgotPassword />}>
        {/* ... etc. */}
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
