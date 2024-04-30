
import Swal from "sweetalert2";
import "./AddEmployee.css"

const AddEmployee = () => {


    const handleAddToEmployee = event =>{
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
        const newEmployee={id,name,email,password,number,company,url,age}
        console.log(newEmployee)


        fetch("employee-management-server-self.vercel.app/employee", {
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(newEmployee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Employee added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    return (
        
        <div id="addEmployee-part">
                            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                <div className="addEmployee-container ">
                    <h1>add employee</h1>


                        <div className="input-container">

                            <form onSubmit={handleAddToEmployee}>
                                <input type="number" name="id" id="" placeholder="ID" />
                                <br />
                                <input type="text" name="name" id="" placeholder="Name"/>
                                <br />
                                <input type="email" name="email" id="" placeholder="Email" />
                                <br />
                                <input type="password" name="password" id="" placeholder="Password"/>
                                <br />
                                <input type="number" name="number" id="" placeholder="Number" />
                                <br />
                                <input type="number" name="age" id="" placeholder="Age"/>
                                <br />
                                <input type="text" name="company" id="" placeholder="Company Name" />
                                <br />
                                <input type="text" name="url" id="" placeholder="URL" />
                                <br />

                                <input className="btn btn-block" type="submit" value="Add Employee" />
                                


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
    );
};

export default AddEmployee;