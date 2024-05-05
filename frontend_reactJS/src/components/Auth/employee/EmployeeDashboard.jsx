/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { HiStatusOnline } from "react-icons/hi";
import { MdOutlineNoAccounts } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useEffect, useState } from 'react';

//REDUX
import { fetchEmployees, addEmployee } from '../../redux/actions/employeeAction';
import { fetchImages } from '../../redux/actions/imageAction';

//TOASTER
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EmployeeDashboard = (props) => {

    const [formDataAddEmployee, setFormDataEmployeeAddEmployee] = useState({
        employee_fullname: '',
        employee_email: '',
        employee_contact_no: '',
        employee_role: '',
        employee_position: '',
        employee_department: '',
        employee_status: ''
    });

    useEffect(() => {
        props.fetchEmployees();
        props.fetchImages();
    }, []);

    const employeesCollectionArrays = props.employeesData?.employees?.data;

    function getAllEmployees(employeesCollectionArrays) {
        let item = [];
        if (employeesCollectionArrays) {
            for (let ez = 0; ez < employeesCollectionArrays.length; ez++) {
                item.push(employeesCollectionArrays[ez]);
            }
        }
        return item;
    }

    const employeesList = getAllEmployees(employeesCollectionArrays);

    console.log("DATA SA employeesList", employeesList);

    const imageCollectionArrays = props.imagesData?.images?.data;
    console.log("IMAGE COLLECTION ARRAYS", imageCollectionArrays);

    const getEmployeeImage = (imageCollectionArrays, employeesList) => {
        // Check if imageCollectionArrays is an array and not empty
        if (Array.isArray(imageCollectionArrays) && imageCollectionArrays.length > 0) {
            let item = [];
            // Filter the array based on the condition
            const employeeId = employeesList.length != 0 ? employeesList[0].id : null;
            console.log("DATA SA employeesList", employeeId);

            for (let x = 0; x < employeeId.length; x++) {
                item.push(employeeId[x]);
            }

            return imageCollectionArrays.filter(image => image.img_emp_id == 1);
        } else {

            return [];
        }
    };

    const filterImage = getEmployeeImage(imageCollectionArrays, employeesList);

    const handleAddEmployee = async (event) => {
        event.preventDefault();
        try {
            //ipasa ang data sa form na naa sa setter
            await props.addEmployee(formDataAddEmployee);
            
        } catch(error) {
            console.error(error);
        }
    }

    if (props.loading) {
        return <div>
        <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
        </div>;
    }
    

    return (
        <div className="hero max-w-full">
        <ToastContainer />
   
        <dialog id="removeEmployee" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">REMOVE EMPLOYEE?</h3>
            <p className="py-4">Are you sure you want to remove this Employee?</p>
            <button className='btn bg-amber-100'>Yes</button>
          </div>
        </dialog>


            <dialog id="addEmployeeModal" className="modal ">
                <div className="modal-box w-11/12 max-w-5xl bg-amber-100">
                    <h3 className="font-bold text-3xl text-black">ADD EMPLOYEE</h3>
                    <div className="modal-action">
                        <form method="dialog" onSubmit={handleAddEmployee}>
                            <div className="grid grid-cols-3 gap-6">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Fullname</span>
                                    </label>
                                    <input
                                      
                                        name="employee_fullname" //key para sa form data
                                        type="text"
                                        placeholder="Enter Fullname"
                                        className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                        onChange={(e) => setFormDataEmployeeAddEmployee(prevState => ({ ...prevState, employee_fullname: e.target.value }))}
                                        style={{ backgroundColor: 'black' }}
                                        value={formDataAddEmployee.employee_fullname}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Email</span>
                                    </label>
                                    <input
                                        key=""
                                        name="employee_fullname" //key para sa form data
                                        type="text"
                                        placeholder="Enter email"
                                        className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                        onChange={(e) => setFormDataEmployeeAddEmployee(prevState => ({...prevState, employee_email: e.target.value}))}
                                        value={formDataAddEmployee.employee_email}    
                                        style={{ backgroundColor: 'black' }}
                                    />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black text-2xl">Department</span>
                                </label>
                                <input
                                    key=""
                                    name="employee_department" //key para sa form data
                                    type="text"
                                    placeholder="Enter email"
                                    className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                    onChange={(e) => setFormDataEmployeeAddEmployee(prevState => ({...prevState, employee_department: e.target.value}))}
                                    value={formDataAddEmployee.employee_department}    
                                    style={{ backgroundColor: 'black' }}
                                />
                            </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Contact No.</span>
                                    </label>
                                    <input
                
                                        name="employee_contact_no" //key para sa form data
                                        type="text"
                                        placeholder="Enter contact no."
                                        className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                        onChange={(e) => setFormDataEmployeeAddEmployee(prevState =>({...prevState, employee_contact_no: e.target.value}))}
                                        value={formDataAddEmployee.employee_contact_no}
                                        style={{ backgroundColor: 'black' }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Position</span>
                                    </label>
                                    <input
                                    
                                        name="employee_position" //key para sa form data
                                        type="text"
                                        placeholder="Enter Position"
                                        className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                        onChange={(e) => setFormDataEmployeeAddEmployee(prevState => ({...prevState, employee_position: e.target.value}))}
                                        value={formDataAddEmployee.employee_position}
                                        style={{ backgroundColor: 'black' }}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Role</span>
                                    </label>
                                    <input
                                  
                                        name="employee_role" //key para sa form data
                                        type="text"
                                        placeholder="Enter role"
                                        className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                       
                                        onChange={(e) => setFormDataEmployeeAddEmployee(prevState => ({...prevState, employee_role: e.target.value}))}
                                        value={formDataAddEmployee.employee_role}
                                        style={{ backgroundColor: 'black' }}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black text-2xl">Status</span>
                                    </label>
                                    <input
                                      
                                        name="employee_status" //key para sa form data
                                        type="text"
                                        placeholder="Enter status(Active/Inactive)"
                                        className="input input-bordered shadow-2xl text-2xl  text-amber-100"
                                        onChange={(e) => setFormDataEmployeeAddEmployee(prevState => ({...prevState, employee_status: e.target.value}))}
                                        value={formDataAddEmployee.employee_status}
                                        style={{ backgroundColor: 'black' }}
                                    />
                                </div>
                            </div>

                            <br />
                            <div className='flex '>
                                <div className='flex-initial pr-2'>
                                    <button type="submit" className="btn bg-black text-amber-100">Add</button>
                                </div>
                                <div className='flex-initial'>
                                    <button className="btn bg-black text-amber-100">Close</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="hero bg-amber-100 rounded-lg">
                <div className="bg-slate-300 ">
                    <span className="text-4xl font-black  text-black">
                        <center>
                            <IoIosPersonAdd
                                onClick={() => document.getElementById('addEmployeeModal').showModal()}
                                style={{ fontSize: "50px", color: "black", marginLeft: "95%", marginBottom: "0%", marginTop: "0%" }}
                            />
                            EMPLOPYEE DASHBOARD
                        </center>
                    </span>

                    <div className="overflow-x-auto border-2 hover:border-t-4  bg-amber-100 text-black">
                        {Array.isArray(employeesCollectionArrays) && employeesCollectionArrays.length > 0 ? (
                            <table className="table py-10 px-10 my-10 mx-10 overflow-x-auto">
                                {/* head */}
                                <thead className=" text-black ">
                                    <tr className="md:table-row" style={{ fontSize: "15px", color: "black" }}>
                                        <th className="md:table-cell" >Avatar</th>
                                        <th className="md:table-cell">Id</th>
                                        <th className="md:table-cell">Fullname</th>
                                        <th className="md:table-cell">Email</th>
                                        <th className="md:table-cell">Contact No.</th>
                                        <th className="md:table-cell">Position</th>
                                        <th className="md:table-cell">Department</th>
                                        <th className="md:table-cell">Status</th>
                                        <th className="md:table-cell">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {employeesList && employeesList.map((item, index) => (
                                        item.employee_status != 0 && (
                                        <tr key={index} className="md:table-row">
                                            <td className="md:table-cell">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">

                                                        <div className="mask mask-squircle w-12 h-12 shadow-2xl">
                                                            <img src={item.employee_image} />
                                                        </div>

                                                        {filterImage && filterImage.map((image, imageIndex) => (
                                                            <div key={imageIndex} className="mask mask-squircle w-12 h-12 shadow-2xl">
                                                                <img src={image.img_url} alt={`Avatar ${image.img_name}`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="md:table-cell">
                                            {item.id}
                                        </td>
                                            <td className="md:table-cell">
                                                {item.employee_fullname}
                                            </td>

                                            <td className="md:table-cell">
                                                {item.employee_email}
                                            </td>

                                            <td className="md:table-cell">
                                                {item.employee_contact_no}
                                            </td>
                                            <td className="md:table-cell">5
                                            </td>
                                            <td className="md:table-cell">
                                                {item.employee_position}
                                            </td>
                                            <td className="md:table-cell">
                                                {item.employee_status === 1 ?
                                                    <RiAccountPinCircleFill
                                                        style={{ fontSize: "25px", color: "green" }}
                                                    /> : <MdOutlineNoAccounts
                                                        style={{ fontSize: "25px", color: "red" }}
                                                    />}
                                            </td>
                                            <td className="flex md:table-cell" >
                                                <div className="flex">
                                                    <div className="flex-none mr-3">
                                                        <Link to={`/employee/details/${item.id}`} className="text-black">
                                                            <FaEye style={{ fontSize: "20px", color: "black", padding: "0%" }} />
                                                        </Link>

                                                    </div>
                                                    <div className="flex-none mr-3">
                                                        <MdAutoDelete 
                                                        onClick={() => document.getElementById('removeEmployee').showModal()}
                                                         style={{ fontSize: "20px", color: "black" }} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <h1>NO DATA</h1>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employeesData: state.employeeState,
        imagesData: state.imageState,
        loading: state.employeeState.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(fetchEmployees()),
        fetchImages: () => dispatch(fetchImages()),
        addEmployee: (AddEmployee) => dispatch(addEmployee(AddEmployee))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboard);


