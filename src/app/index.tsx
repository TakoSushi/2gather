import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './providers/routing';
import { store } from './providers/store';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
