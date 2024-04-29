import { Link, useLoaderData } from "react-router-dom";
import "./Dashboard.css"
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Dashboard = () => {


    const employees=useLoaderData()
    return (
        
       <div id="dashboard-part">

                <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                <div className="dashboard-container mt-5">
                    <h1 className="lg:text-6xl sm:text-4xl md:text-3xl text-center font-bold mb-3">Employee Management Dashboard</h1>

                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Age</th>
                            <th>Company</th>
                            <th>Update</th>
                        </tr>
                        </thead>

                        {/* foot */}
 
                        
                    </table>

                    <div>
                        {
                            employees.map(employee => <EmployeeCard 
                                key={employee._id}
                                employee={employee}
                                ></EmployeeCard>)
                        }
                    </div>



                </div>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80  bg-[#0a3a4af5] align-center text-white">
                    {/* Sidebar content here */}
                    <li><a>Pages</a></li>
                    <li><a>UI Elements</a></li>
                    <li><a>Widgets</a></li>
                    <li><a>Icons</a></li>
                    <li><a>Forms</a></li>
                    <li><a>Charts</a></li>
                   <Link to="/addEmployee"> <li><a >Create Employee</a></li></Link>
                    </ul>
                
                </div>
                </div>



        </div>
    );
};

export default Dashboard;