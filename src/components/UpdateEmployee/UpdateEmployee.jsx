
import { useLoaderData } from "react-router-dom";
import "./UpdateEmployee.css"
import Swal from "sweetalert2";
const UpdateEmployee = () => {

    const employee=useLoaderData();
    const {_id,name,number,age,company,id,email,password}=employee;


    const handleUpdateEmployee = event =>{
        event.preventDefault();
        const form =event.target;
        const id=form.id.value;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const number=form.number.value;
        const age=form.age.value
        const company=form.company.value;
        const url =form.url.value;
        const updateEmployee={id,name,email,password,number,company,url,age}
        console.log(updateEmployee)


        fetch(`http://localhost:5000/employee/${_id}`, {
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(updateEmployee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Employee updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                form.reset();
            }
            
        })
    }



    return (
        
        <div>
            
            <div id="UpdateEmployee-part">
                            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                <div className="UpdateEmployee-container ">
                    <h1>Update employee:{name}</h1>


                        <div className="input-container">

                            <form onSubmit={handleUpdateEmployee}>
                                <input type="number" name="id" id="" placeholder="ID" defaultValue={id} />
                                <br />
                                <input type="text" name="name" id="" placeholder="Name" defaultValue={name}/>
                                <br />
                                <input type="email" name="email" id="" placeholder="Email" defaultValue={email}  />
                                <br />
                                <input type="password" name="password" id="" placeholder="Password" defaultValue={password} />
                                <br />
                                <input type="number" name="number" id="" placeholder="Number" defaultValue={number} />
                                <br />
                                <input type="number" name="age" id="" placeholder="Age" defaultValue={age}/>
                                <br />
                                <input type="text" name="company" id="" placeholder="Company Name" defaultValue={company} />
                                <br />
                                <input type="text" name="url" id="" placeholder="URL" />
                                <br />

                                <input className="btn btn-block" type="submit" value="Update Employee" />
                                


                            </form>
                           
                        </div>

                       
         


                </div>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-[#0a3a4af5] align-center text-white">
                    {/* Sidebar content here */}
                    <li><a>Pages</a></li>
                    <li><a>UI Elements</a></li>
                    <li><a>Widgets</a></li>
                    <li><a>Icons</a></li>
                    <li><a>Forms</a></li>
                    <li><a>Charts</a></li>
                    </ul>
                
                </div>
                </div>
            
        </div>

        </div>
    );
};

export default UpdateEmployee;