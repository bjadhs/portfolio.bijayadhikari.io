import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Home from './pages/Home';
import Layout from './Layout';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
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
      {
        path: '/resume',
        element: <ResumePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => (
  <ThemeProvider>
    <div className='min-h-screen bg-bg-primary text-text-primary font-sans'>
      <RouterProvider router={router} />
      <ThemeToggle />
    </div>
  </ThemeProvider>
);

export default App;
