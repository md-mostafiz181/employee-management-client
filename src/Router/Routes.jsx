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
          loader:()=> fetch("http://localhost:5000/employee")
        },
        {
          path:"addEmployee",
          element:<AddEmployee></AddEmployee>
        },
        {
          path:"updateEmployee/:id",
          element:<UpdateEmployee></UpdateEmployee>,
          loader:({params})=> fetch(`http://localhost:5000/employee/${params.id}`)
        }
        

      ]
    },
  ]);