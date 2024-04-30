import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import About from "../components/About/About";
import AddEmployee from "../components/AddEmployee/AddEmployee";
import UpdateEmployee from "../components/UpdateEmployee/UpdateEmployee";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            
            
        },
        {
          path:"about",
          element:<About></About>

        },
        {
          path:"dashboard",
          element:<Dashboard></Dashboard>,
          loader:()=> fetch("https://employee-management-server-47r1r2e82-mostafiz181s-projects.vercel.app/employee")
        },
        {
          path:"addEmployee",
          element:<AddEmployee></AddEmployee>
        },
        {
          path:"updateEmployee/:id",
          element:<UpdateEmployee></UpdateEmployee>,
          loader:({params})=> fetch(`https://employee-management-server-47r1r2e82-mostafiz181s-projects.vercel.app/employee/${params.id}`)
        }
        

      ]
    },
  ]);