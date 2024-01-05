import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import dataStore from './store/data.ts';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={dataStore}>
    <RouterProvider router={AppRouter} />

  </Provider>
);
