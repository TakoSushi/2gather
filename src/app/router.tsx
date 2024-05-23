import { createBrowserRouter } from 'react-router-dom';

import Authorization from '../pages/authorization/Authorization';
import ErrorPage from '../pages/errorPage/errorPage';
import App from '../pages/home/layout';
import Registration from '../pages/registration/Registration';
import Contact from '../pages/user-profile/user-profile';
import { paths } from '../shared/model/path';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <App />,
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
