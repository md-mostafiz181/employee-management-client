import { Link } from "react-router-dom";
import "./EmployeeCard.css"

const EmployeeCard = ({employee}) => {

    const {_id,name,number,age,company,id}=employee;


    return (
        
        <div>
            
            <div className="overflow-x-auto">




                <table className="table">
                <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                {id}
                            </td>
                            <td className="name">
                            {name}
                            </td>
                            <td className="number">
                                    {number}
                            </td>
                            <td>
                                {/* age */}
                                {age}
                            </td>
                            <td className="company">
                                {company}
                            </td>

                            <Link to={`/updateEmployee/${_id}`}><button className="btn-update">update</button></Link>
                        </tr>

                        </tbody>
                </table>
                </div>
        </div>
    );
};

export default EmployeeCard;