import { createBrowserRouter } from 'react-router-dom';

import Registration from '../pages/autorization/registration';
import ErrorPage from '../pages/errorPage/errorPage';
import App from '../pages/home/layout';
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
    element: <Registration />,
  },
  {
    path: paths.auth.signUp,
    element: <div>Sign-UP</div>,
  },
]);

export { router };
