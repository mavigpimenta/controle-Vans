import { createRoot } from 'react-dom/client'
import './index.css'
import { Login } from './Login/Login' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NewPassword } from './NewPassword/NewPassword';
import { EmployeesList } from './Employees/EmployeesList';
import { NavBarAdm } from './components/NavBarAdm';
import { RegisterUser } from './Users/RegisterUser';
import { RegisterChildren } from './Children/RegisterChildren';

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
  },
  {
    path: "/registerfunc",
    element: <RegisterUser/>
  },
  {
    path: "registerchild",
    element: <RegisterChildren/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);