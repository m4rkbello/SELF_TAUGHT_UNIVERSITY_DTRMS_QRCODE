/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { BsQrCodeScan } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { TiUserAddOutline } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { FaRunning } from "react-icons/fa";
import { FcDoughnutChart, FcOpenedFolder, FcHome, FcTimeline, FcMenu, FcExpired, FcCurrencyExchange, FcButtingIn, FcStatistics, FcManager, FcElectricalThreshold, FcComboChart, FcList, FcSettings, FcConferenceCall, FcReuse, FcDepartment, FcMoneyTransfer, FcOvertime, FcDebt, FcPortraitMode, FcSalesPerformance } from "react-icons/fc";
//LAYOUTS
import Content from './components/layouts/Content';
import NavBar from './components/layouts/NavBar';
import SideBar from './components/layouts/SideBar';
import Footer from './components/layouts/Footer';
//ADMIN-ROUTES
import UserLogin from './components/Auth/admin/UserLogin';
import UserRegister from './components/Auth/admin/UserRegister';
import PageNotFound from './components/Auth/admin/404/PageNotFound';
import UserDashboard from './components/Auth/admin/user/UserDashboard';
import UserDetails from './components/Auth/admin/user/UserDetails';
import UserChangePassword from './components/Auth/admin/user/UserChangePassword';
import ForgotPassword from './components/Auth/admin/ForgotPassword';
import Dashboard from './components/Auth/admin/Dashboard';
import Payroll from './components/Auth/admin/payroll/Payroll';
import EditPayroll from './components/Auth/admin/payroll/EditPayroll';
import Overtime from './components/Auth/admin/overtime/Overtime';
import EditOvertime from './components/Auth/admin/overtime/EditOvertime';
import Rate from './components/Auth/admin/rate/Rates';
import EditRates from './components/Auth/admin/rate/EditRates';
import Deduction from './components/Auth/admin/deduction/Deduction';
import EditDeduction from './components/Auth/admin/deduction/EditDeduction';
import Departments from './components/Auth/admin/department/Departments';
import EditDepartment from './components/Auth/admin/department/EditDepartment';
//EMPLOYEE-ROUTES
import EmployeeRegister from './components/Auth/employee/EmployeeRegister';
import EmployeeDashboard from './components/Auth/employee/EmployeeDashboard';
import EmployeePersonalDetails from './components/Auth/employee/EmployeePersonalDetails';
import ArchiveEmployee from './components/Auth/employee/EmployeeArchieve';
import EmployeeAttendance from './components/Auth/employee/EmployeeAttendance';
import EmployeeScanQRCode from './components/Auth/employee/EmployeeScanQRCode';
import EmployeeLogin from './components/Auth/employee/EmployeeLogin';
//REDUX-DISPATCH ACTIONS
import { fetchUsers } from './components/redux/actions/userAction';
import { fetchEmployees } from './components/redux/actions/employeeAction';
import { fetchAttendances } from './components/redux/actions/attendanceAction';

function App(props) {
  //FOR AUTHENTICATION-PURPOSES GAMIT TOKEN UG ID SA USERS
  const [localStorageHasUserIdData, setLocalStorageHasUserId] = useState('');
  const [sessionStorageHasUserIdData, setSessionStorageHasUserId] = useState('');
  const [localStorageHasToken, setLocalStorageHasToken] = useState('');
  const [sessionStorageToken, setSessionStorageToken] = useState('');
  const [cookiesData, setCookiesData] = useState('');
  const [accessTypeEmployee, setAccessTypeEmployee] = useState('');
  const [accessTypeUser, setAccessTypeUser] = useState('');

  //E GAWAS!
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve cookies
    const getCookieAccessTypeEmployeeValue = (DTRMS_BY_M4RKBELLO_EMPLOYEE_ACCESS_TYPE_ID) => {
      const cookies = document.cookie.split('; ');
      for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === DTRMS_BY_M4RKBELLO_EMPLOYEE_ACCESS_TYPE_ID) {
          return value;
        }
      }
      return null; // Return null if the cookie is not found
    };

    const getCookieAccessTypeUserValue = (DTRMS_BY_M4RKBELLO_USER_ACCESS_TYPE_ID) => {
      const cookies = document.cookie.split('; ');
      for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === DTRMS_BY_M4RKBELLO_USER_ACCESS_TYPE_ID) {
          return value;
        }
      }
      return null; // Return null if the cookie is not found
    };

    //kuhaon ang data sa localStorage/Session Storage/Cookie 
    const localStorageHasUserId = localStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID');
    const sessionStorageHasUserId = sessionStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID');
    const localStorageHasTokenData = localStorage.getItem('DTRMS_BY_M4RKBELLO');
    const sessionStorageHasTokenData = sessionStorage.getItem('DTRMS_BY_M4RKBELLO');
    const cookiesData = document.cookie;
    const cookiesAccessTypeEmployeeLayer = parseInt(getCookieAccessTypeEmployeeValue('DTRMS_BY_M4RKBELLO_EMPLOYEE_ACCESS_TYPE_ID'), 10);

    const cookiesAccessTypeUserLayer = parseInt(getCookieAccessTypeUserValue('DTRMS_BY_M4RKBELLO_USER_ACCESS_TYPE_ID'), 10);

    setLocalStorageHasUserId(localStorageHasUserId);
    setSessionStorageHasUserId(sessionStorageHasUserId);
    setLocalStorageHasToken(localStorageHasTokenData);
    setSessionStorageToken(sessionStorageHasTokenData);
    setCookiesData(cookiesData);
    setAccessTypeEmployee(cookiesAccessTypeEmployeeLayer);
    setAccessTypeUser(cookiesAccessTypeUserLayer)

    props.fetchUsers();
    props.fetchEmployees();
    props.fetchAttendances();
  }, []);

  //LOGOUT
  const destroyAuthentications = () => {
    // Clear localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();
  
    // Remove all cookies
    document.cookie.split(';').forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, '') // Remove spaces before the cookie
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/;`); // Set expiration to delete cookie
    });
  
    // Set the location to the login page and reload
    window.location.href = '/login';
  };
  

  // const usersCollection = props && props.users && props.users.data;
  const usersCollection = props?.users?.data; // Accessing users array from props

  // console.log("ID CHOI", usersCollection);
  function getUserAuthenticated(usersCollection) {
    let item = [];

    // Check if usersCollection is defined and not null
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
  return (
    <div className="flex flex-col h-screen">
      <div className="navbar shadow-md bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-700 border-r-4 border-black">
        {(cookiesData?.length ?? 0) > 0 ? (
          <>
            <NavBar isAuthenticatedUser={isAuthenticatedUser} destroyAuthentications={destroyAuthentications} />
          </>
        ) : (
          <>
            <div className="flex-1 my-0 mx-0">
              <img  src="https://i.ibb.co/7JHVynR/DTRMS-LOGO-removebg-preview.png"
                className="h-20 w-auto object-contain"
                alt="DTRMS-LOGO-removebg-preview" border="0" />
              {/*** 
             <span className="btn btn-ghost bg-white text-4xl text-zinc-400 border-b-4 border-black">DTRMS+</span>
              **/}
            </div>
          </>
        )}

        <div className="flex items-center">
          {/* Show dropdown if authenticated */}
          {(cookiesData?.length ?? 0) > 0 ? (
            <>
              <div className="dropdown dropdown-end">

                <ul tabIndex={0} className="mt-0 z-[1] shadow menu menu-sm dropdown-content bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-700 rounded-box w-96">
                  {/* Profile */}
                  <li>
                    <span className="justify-between text-black">
                      <FaUserTie style={{ fontSize: "25px", color: "white" }} />
                      <span style={{ fontSize: "20px", color: "white" }}>
                        Profile
                      </span>
                      <span className="badge bg-black text-white">
                        <Link to="/admin/user/profile-details">Open</Link>
                      </span>
                    </span>
                  </li>
                  {/* Settings */}
                  <li className="text-black">
                    <span className="justify-between">
                      <AiFillSetting
                        style={{ fontSize: "25px", color: "white" }}
                      />
                      <span style={{ fontSize: "20px", color: "white" }}>
                        Settings
                      </span>
                      <span className="badge bg-black text-white">
                        <Link to="">Open</Link>
                      </span>
                    </span>
                  </li>
                  {/* Logout */}
                  <li className="text-black" onClick={destroyAuthentications}>
                    <span className="flex justify-between items-center">
                      <FaRunning style={{ fontSize: "25px", color: "white" }} />
                      <span style={{ fontSize: "20px", color: "white" }}>Logout</span>
                    </span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* Show guest links if not authenticated */}
              <ul className="menu menu-horizontal drop-shadow-xl px-1 text-black bg-transparent border-b-4">
                <li className="text-2xl">
                  <Link to="/attendance/scan" style={{ color: 'white' }}>
                    <BsQrCodeScan />
                  </Link>
                </li>
                <li className="text-2xl">
                  <Link to="/login" style={{ color: 'white' }}>
                    <FaSignInAlt />
                  </Link>
                </li>
                <li className="text-2xl">
                  <Link to="/register" style={{ color: 'white', height: '2rem', weight: '2rem' }}>
                    <TiUserAddOutline />
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="drawer lg:drawer-open flex-1">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center px-0 py-0 md:px-8 md:py-8">
    
        <div>
  {cookiesData?.length > 0 ? (
    // Check if accessTypeLayer is 2
    accessTypeEmployee === 2 ? (
      // Render only the Payroll route if accessTypeLayer is 2
      <Routes>
        <Route path="/admin/payrolls" element={<Payroll />} />
        <Route path="/admin/deductions" element={<Deduction />} />
        <Route path="/admin/overtimes" element={<Overtime />} />
        <Route path="/admin/rates" element={<Rate />} />
      </Routes>
    ) : accessTypeUser === 1 ? (
      // Render other routes if accessTypeLayer is 1
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/users" element={<UserDashboard />} />
        <Route path="/admin/user/profile-details/change-password/:userId" element={<UserChangePassword />} />
        <Route path="/admin/user/profile-details" element={<UserDetails />} />
        <Route path="/admin/payrolls" element={<Payroll />} />
        <Route path="/admin/payroll/edit/:payrollId" element={<EditPayroll />} />
        <Route path="/admin/rates" element={<Rate />} />
        <Route path="/admin/rate/edit/:rateId" element={<EditRates />} />
        <Route path="/admin/overtimes" element={<Overtime />} />
        <Route path="/admin/overtime/edit/:overtimeId" element={<EditOvertime />} />
        <Route path="/admin/deductions" element={<Deduction />} />
        <Route path="/admin/deduction/edit/:deductionId" element={<EditDeduction />} />
        <Route path="/admin/departments" element={<Departments />} />
        <Route path="/admin/department/edit/:departmentId" element={<EditDepartment />} />
        <Route path="/login" element={<EmployeeLogin />} />
        <Route path="/register" element={<EmployeeRegister />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/details/:employeeId" element={<EmployeePersonalDetails />} />
        <Route path="/employee/archieve" element={<ArchiveEmployee />} />
        <Route path="/employee/attendance" element={<EmployeeAttendance />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    ) : (
      // Render all other routes if accessTypeLayer is neither 1 nor 2
      <Routes>
        <Route path="/admin/login" element={<UserLogin />} />
        <Route path="/admin/register" element={<UserRegister />} />
        <Route path="/attendance/scan" element={<EmployeeScanQRCode />} />
        <Route path="/" element={<PageNotFound />} />
        <Route path="/login" element={<EmployeeLogin />} />
        <Route path="/register" element={<EmployeeRegister />} />
      </Routes>
    )
  ) : (
    // Routes for when no cookies data is available
    <Routes>
      <Route path="/admin/login" element={<UserLogin />} />
      <Route path="/admin/register" element={<UserRegister />} />
      <Route path="/attendance/scan" element={<EmployeeScanQRCode />} />
      <Route path="/" element={<PageNotFound />} />
      <Route path="/login" element={<EmployeeLogin />} />
      <Route path="/register" element={<EmployeeRegister />} />
    </Routes>
  )}
</div>
        </div>
        {/*** NAAY 3 KA SECURITY VALIDATION GAMIT TOKEN SA SESSION STORAGE / LOCAL STORAGE  UG SESSION COOKIES */}
        {(cookiesData?.length ?? 0) > 0 ? (
          <>
          <SideBar isAuthenticatedUser={cookiesData.length > 0} accessTypeUser={accessTypeUser} accessTypeEmployee={accessTypeEmployee} />
          </>
        ) : (
          <>
          </>
        )}
      </div>
      <Footer className="bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-700 p-4 text-white text-center mt-auto" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userState.users.data,
    employees: state.employees,
    attendances: state.attendances
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchEmployees: () => dispatch(fetchEmployees()),
    fetchAttendances: () => dispatch(fetchAttendances()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
