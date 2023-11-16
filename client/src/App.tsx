import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './styles/App.css'

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        // action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        // action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        // element: <DashboardLayout  queryClient={} />,
        // loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddJob />,
            // action: addJobAction(queryClient),
          },
          {
            path: 'stats',
            element: <Stats />,
            // loader: statsLoader(queryClient),
            // errorElement: <ErrorElement />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            // loader: allJobsLoader(queryClient),
            // errorElement: <ErrorElement />,
          },
          {
            path: 'profile',
            element: <Profile />,
            // action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin />,
            // loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            // loader: editJobLoader(queryClient),
            // action: editJobAction(queryClient),
          },
          { 
            path: 'delete-job/:id'
          }
          // action: deleteJobAction(queryClient) },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
