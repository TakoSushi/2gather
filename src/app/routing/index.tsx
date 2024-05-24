import Authorization from '@pages/authorization/ui';
import ErrorPage from '@pages/errorPage/errorPage';
import { MainLayout } from '@pages/home/layout';
import Registration from '@pages/registration/Registration';
import Contact from '@pages/user-profile/user-profile';
import { paths } from '@shared/const/path';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
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
