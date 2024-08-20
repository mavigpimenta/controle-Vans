import { createRoot } from 'react-dom/client'
import './index.css'
import { Login } from './Login/Login' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NewPassword } from './NewPassword/NewPassword';
import { EmployeesList } from './Employees/EmployeesList';
import { NavBarAdm } from './components/NavBarAdm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/password",
    element: <NewPassword/>
  },
  {
    path: "/employees",
    element: <EmployeesList/>
  },
  {
    path: "/dashboard",
    element: <NavBarAdm/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);