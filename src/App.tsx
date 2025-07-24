import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Layout';
import ProjectPage from './pages/ProjectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
