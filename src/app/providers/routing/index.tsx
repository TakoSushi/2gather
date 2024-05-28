import { Authorization } from '@pages/authorization/';
import { ErrorPage } from '@pages/errorPage/';
import { MainLayout } from '@pages/layout/';
import { Registration } from '@pages/registration/';
import { Contact } from '@pages/user-profile/';
import { paths } from '@shared/const/path';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: 'contacts/:contactId',
        path: 'accaunt',
        element: <Contact />,
      },
    ],
  },
  {
    path: paths.auth.signIn,
    element: <Authorization />,
  },
  {
    path: paths.auth.signUp,
    element: <Registration />,
  },
]);

export { router };
