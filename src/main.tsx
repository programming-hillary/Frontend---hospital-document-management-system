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
import { MyDocs } from '@org.mwashi-mwale/my-docs'
import {DashHome} from '@org.mwashi-mwale/dash_home'
import {MyHistory} from '@org.mwashi-mwale/my_history'
import {Analytics} from '@org.mwashi-mwale/analytics'
import {Settings} from '@org.mwashi-mwale/settings'
import {Help} from '@org.mwashi-mwale/help'
import {Search} from '@org.mwashi-mwale/search'
import { FileOptions } from '@org.mwashi-mwale/dash_home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Homepage />,
    children: [
      {
        path: '',
        element: <DashHome />,
        children: [
          {
            path: 'more_options',
            element: <FileOptions />
          }
        ]
      },
      {
        path: 'my_docs',
        element: <MyDocs />,
      },
      {
        path: 'my_history',
        element: <MyHistory />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'help',
        element: <Help />,
      },
      {
        path: 'search',
        element: <Search />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
  {
    path: '/forgot_password',
    element: <ForgotPassword />,
  },
  {
    path: '/verify_email',
    element: <VerifyEmail />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
