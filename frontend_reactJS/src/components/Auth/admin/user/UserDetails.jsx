/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUserEdit, FaSave, FaLongArrowAltLeft } from "react-icons/fa";
import { FcFolder, FcOpenedFolder, FcSupport, FcPlus, FcAcceptDatabase, FcLeft, FcKey, FcFile, FcUnlock, FcSalesPerformance, FcSearch, FcPrevious, FcViewDetails, FcEmptyTrash, FcNext, FcPortraitMode } from "react-icons/fc";
import { MdEditSquare } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
//redux-actions
import { fetchUsers, updateUser, uploadAndUpdateImageUser } from '../../../redux/actions/userAction';
import { fetchEmployees } from '../../../redux/actions/employeeAction';
import { FaUpload } from "react-icons/fa6";
import { fetchImages } from '../../../redux/actions/imageAction';

const UserDetails = (props) => {
  console.log("DATA SA USER PARA E DISPLAY!", props);
  //FOR AUTHENTICATION-PURPOSES
  const [localStorageHasUserIdData, setLocalStorageHasUserId] = useState('');
  const [sessionStorageHasUserIdData, setSessionStorageHasUserId] = useState('');
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // e enable niya or disabled
  //maghandle sa data sa forms-input
  const [userData, setUserData] = useState({
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    user_contact_no: '',
  });

  //naga hold ug sa formData
  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUpdateUser = () => {
    try {
      // Create a copy of the user data
      const updatedUserData = { ...userData };

      // Check if each field has changes, if not, retain the original value
      if (!updatedUserData.user_firstname) {
        updatedUserData.user_firstname = isAuthenticatedUser[0].user_firstname;
      }
      if (!updatedUserData.user_lastname) {
        updatedUserData.user_lastname = isAuthenticatedUser[0].user_lastname;
      }
      if (!updatedUserData.user_email) {
        updatedUserData.user_email = isAuthenticatedUser[0].user_email;
      }
      if (!updatedUserData.user_contact_no) {
        updatedUserData.user_contact_no = isAuthenticatedUser[0].user_contact_no;
      }

      // Check if there are any changes
      const hasChanges = Object.values(updatedUserData).some(value => value !== '');

      if (hasChanges) {
        props.updateUser(localStorageHasUserIdData, updatedUserData); // Pass updated userData
        setIsEditing(!isEditing); // Toggle editing mode

      } else {
        // No changes detected, toggle editing mode without updating user data
        setIsEditing(!isEditing);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  //NAGBIRAG DATA GIKAN SA PROPS DRILLING
  const usersCollection = props?.users?.data;

  function getUserAuthenticated(usersCollection) {
    let item = [];

    if (usersCollection && usersCollection.length) {
      for (let ez = 0; ez < usersCollection.length; ez++) {
        if (usersCollection[ez].id == sessionStorageHasUserIdData && usersCollection[ez].id == localStorageHasUserIdData) {
          item.push(usersCollection[ez]);
        }
      }
    }
    return item;
  }

  const isAuthenticatedUser = getUserAuthenticated(usersCollection);
  console.log("DATA SA isAuthenticatedUser LINE 83", isAuthenticatedUser);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = () => {
    event.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append('user_image', image);
      props.uploadAndUpdateImageUser(formData, localStorageHasUserIdData); // Assuming you have access to localStorageHasUserIdData
    }
  };

  useEffect(() => {
    //kuhaon ang data sa localStorage/Session Storage/Cookie
    const localStorageHasUserId = localStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID');
    const sessionStorageHasUserId = sessionStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID');

    setLocalStorageHasUserId(localStorageHasUserId);
    setSessionStorageHasUserId(sessionStorageHasUserId);

    props.fetchUsers();
    props.fetchEmployees();
    props.fetchImages();

  }, []);

  return (
    <div className="h-full mx-auto max-h-full w-full max-w-full glass p-4 shadow-xl">
      <div className="flex justify-start">
        <div className="text-sm breadcrumbs mb-10 bg-transparent">
          <ul>
            <li>
              <FcLeft
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  height: "35px",
                  width: "35px",
                }}
              />
              <Link to="/" className='hover:text-white'>Home</Link>
            </li>
            <li>
              <FcPortraitMode
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  height: "25px",
                  width: "25px",
                }}
              />
              <Link to="/employee/attendances" className='hover:text-white'>User Details</Link>
            </li>
            <li>
              <span className="inline-flex gap-2 items-center">
                <FcFile
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    height: "25px",
                    width: "25px",
                  }}
                />
                <Link to="" className='hover:text-white'>User Data</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <ToastContainer />
        <dialog id="uploadUserUImage" className="modal">
          <div className="modal-box">
            <form method="dialog justify-center">
              <input type="file" onChange={handleImageChange} className="file-input bg-black w-full max-w-xs" />
              <button onClick={handleImageUpload} className="btn ml-5">Upload</button>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </dialog>

        <div className='bg-transparent shadow-slate-900/100'>
          <div className="grid grid-cols-2 items-center mt-10 mb-5 rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg">
            <div>
              <span className="inline-grid grid-cols-2 gap-4">
                <div className="p-3 flex justify-start">
                  <span></span>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-content flex flex-col items-center">
        <div className="pb-0 pt-5 flex justify-center">
        <div className="avatar">
          <div className="avatar online">
            <div className="w-40 h-40 rounded-full border-4 border-violet-700 ring-primary ring-offset-base-100">
              {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                <img key={index}
                  src={user.user_image}
                  className="w-full h-full rounded-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      

          <FaUpload
            onClick={() => document.getElementById('uploadUserUImage').showModal()}
            style={{ backgroundColor: 'transparent', color: 'black', border: 'none', width: '35px', height: '35px' }}
          />

          <div className="flex flex-col items-center">
            <div className="flex-1 px-10 mx-20">
              <div className="grid grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl">Firstname</span>
                  </label>
                  {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="text"
                      name="user_firstname"
                      className={`input input-bordered shadow-2xl text-2xl text-black ${isEditing ? '' : 'pointer-events-none'}`}
                      defaultValue={user.user_firstname}
                      onChange={handleUpdateInputChange}
                      disabled={!isEditing} // Disable input when not editing
                    />
                  ))}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl">Lastname</span>
                  </label>
                  {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="text"
                      name="user_lastname"
                      className={`input input-bordered shadow-2xl text-2xl text-black ${isEditing ? '' : 'pointer-events-none'}`}
                      defaultValue={user.user_lastname}
                      onChange={handleUpdateInputChange}
                      disabled={!isEditing} // Disable input when not editing
                    />
                  ))}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl">Email</span>
                  </label>
                  {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="text"
                      name="user_email"
                      className={`input input-bordered shadow-2xl text-2xl text-black ${isEditing ? '' : 'pointer-events-none'}`}
                      defaultValue={user.user_email}
                      onChange={handleUpdateInputChange}
                      disabled={!isEditing} // Disable input when not editing
                    />
                  ))}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl">Contact</span>
                  </label>
                  {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="email"
                      name="user_contact_no"
                      className={`input input-bordered shadow-2xl text-2xl text-black ${isEditing ? '' : 'pointer-events-none'}`}
                      defaultValue={user.user_contact_no}
                      onChange={handleUpdateInputChange}
                      disabled={!isEditing} // Disable input when not editing
                    />
                  ))}
                </div>
              </div>
              <br />
              <button onClick={handleUpdateUser} className="btn glass mr-3">
                {isEditing ?
                  < FcUnlock
                    style={{
                      backgroundColor: 'transparent', color: 'white', border: 'none',
                      width: '25px', height: '25px'
                    }} /> :
                  <FcKey style={{ backgroundColor: 'transparent', color: 'black', border: 'none', width: '25px', height: '25px' }} />
                }
              </button>
              <button className="btn glass">
                {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                  <Link key={index} to={`/admin/user/profile-details/change-password/${user.id}`}>
                    <FcSupport
                      style={{ backgroundColor: 'transparent', color: 'black', border: 'none', width: '25px', height: '25px' }}
                    />
                  </Link>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userState.users.data,
  employees: state.employees,
  attendances: state.attendances,
  images: state.imageState,
  localStorageHasUserIdData: localStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID'),
  loading: state.userState.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchEmployees: () => dispatch(fetchEmployees()),
  fetchImages: () => dispatch(fetchImages()),
  uploadAndUpdateImageUser: (formData, userId) => dispatch(uploadAndUpdateImageUser(formData, userId)),
  updateUser: (userId, updatedUserData) => dispatch(updateUser(userId, updatedUserData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
