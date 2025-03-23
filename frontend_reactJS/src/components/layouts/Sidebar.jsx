/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
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
import { NavLink } from 'react-router-dom'; // Import NavLink

const SideBar = ({ isAuthenticatedUser, accessTypeEmployee: propAccessTypeEmployee, accessTypeUser: propAccessTypeUser }) => {
  const [stateAccessTypeUser, setStateAccessTypeUser] = useState('');
  const [stateAccessTypeEmployee, setStateAccessTypeEmployee] = useState('');

  // Function to get the cookie value for access type
  const getCookieAccessTypeEmployeeValue = (cookieName) => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split('=');
      if (key === cookieName) {
        return value;
      }
    }
    return null; // Return null if the cookie is not found
  };

  const getCookieAccessTypeUserValue = (cookieName) => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split('=');
      if (key === cookieName) {
        return value;
      }
    }
    return null; // Return null if the cookie is not found
  };

  //SIDE-EFFECT!
  useEffect(() => {
    const cookiesAccessTypeEmployeeLayer = parseInt(getCookieAccessTypeEmployeeValue('DTRMS_BY_M4RKBELLO_EMPLOYEE_ACCESS_TYPE_ID'), 10) || 0;
    setStateAccessTypeEmployee(cookiesAccessTypeEmployeeLayer);
    console.log("DATA SA cookiesAccessTypeEmployeeLayer", cookiesAccessTypeEmployeeLayer);

    const cookiesAccessTypeUserLayer = parseInt(getCookieAccessTypeUserValue('DTRMS_BY_M4RKBELLO_USER_ACCESS_TYPE_ID'), 10) || 0;
    setStateAccessTypeUser(cookiesAccessTypeUserLayer);
  }, []);

  return (
    <div className="drawer-side border-r-4 bg-black drop-shadow-lg">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-0">

            {(stateAccessTypeUser == 1) && (
              <>
                <li>
                  <details close>
                    <summary className='glass hover:bg-violet-800'>
                      <FcTimeline
                        style={{
                          height: "2.5rem",
                          width: "2.5rem",
                        }}
                      />
                      <span className='text-2xl'>
                        GO TO
                      </span>
                    </summary>
                    <ul>
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcComboChart
                            style={{
                              height: "2rem",
                              width: "2rem",
                            }}
                          />
                          <span className='text-lg'>
                            ANALYTICS&MONITORING
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/employee/attendance"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcStatistics
                            style={{
                              height: "2rem",
                              width: "2rem",
                            }}
                          />
                          <span className='text-lg'>
                            ATTENDANCE LIST
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/employee/dashboard"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcButtingIn
                            style={{
                              height: "2rem",
                              width: "2rem",
                            }}
                          />
                          <span className='text-lg'>
                            EMPLOYEES LIST
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/employee/archieve"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcReuse
                            style={{
                              height: "2rem",
                              width: "2rem",
                            }}
                          />
                          <span className='text-lg'>
                            EMPLOYEES ARCHIEVE
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/admin/departments"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcDepartment
                            style={{
                              height: "2rem",
                              width: "2rem",
                            }}
                          />
                          <span className='text-lg'>
                            DEPARTMENTS
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/admin/payrolls"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcCurrencyExchange
                            style={{
                              height: "2rem",
                              width: "2rem",
                            }}
                          />
                          <span className='text-lg'>
                            PAYROLLS
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/admin/rates"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcSalesPerformance
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                            }}
                          />
                          <span className='text-lg'>
                            RATES
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/admin/overtimes"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcOvertime
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                            }}
                          />
                          <span className='text-lg'>
                            OVERTIMES
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/admin/deductions"
                          className={({ isActive }) =>
                            isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                          }
                        >
                          <FcExpired
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                            }}
                          />
                          <span className='text-lg'>
                            DEDUCTIONS
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcDoughnutChart
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    DASHBOARD
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/employee/attendance"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcElectricalThreshold
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    ATTENDANCE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/employee/dashboard"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcConferenceCall
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    EMPLOYEES
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/employee/archieve"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcReuse
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    EMPLOYEES ARCH.
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/admin/departments"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcDepartment
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    DEPARTMENTS
                  </NavLink>
                </li>
              </>
            )}

            {((stateAccessTypeEmployee === 2) || (stateAccessTypeUser === 1)) && (
              <>
                <li>
                  <NavLink
                    to="/admin/payrolls"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcMoneyTransfer
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    PAYROLLS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/rates"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcSalesPerformance
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    RATES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/overtimes"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcOvertime
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    OVERTIMES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/deductions"
                    className={({ isActive }) =>
                      isActive ? 'text-2xl glass bg-violet-800' : 'text-2xl glass hover:bg-violet-800'
                    }
                  >
                    <FcDebt
                      style={{
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />
                    DEDUCTIONS
                  </NavLink>
                </li>
              </>
            )}

            {(stateAccessTypeUser == 1) && (
              <>
                <li className="glass text-2xl hover:bg-violet-800">
                  <details close>
                    <summary className="glass text-2xl hover:bg-violet-800">
                      <FcSettings className="glass text-2xl hover:bg-violet-800"
                        style={{
                          height: "2.5rem",
                          width: "2.5rem",
                        }}
                      />
                      <span className='text-2xl'>
                        MANAGE USERS
                      </span>
                    </summary>
                    <ul>
                      <li className="glass text-2xl hover:bg-violet-800">
                        <a>
                          <FcManager
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                            }}
                          />
                          <span className='text-2xl'>
                            USER
                          </span>
                        </a>
                      </li>
                      <li className="glass text-2xl hover:bg-violet-800">
                        <a>
                          <FcList
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                            }}
                          />
                          <span className='text-2xl'>
                            USER LIST
                          </span>
                        </a>
                      </li>
                      <li className="glass text-2xl hover:bg-violet-800">
                        <a>
                          <FcList
                            style={{
                              height: "2.5rem",
                              width: "2.5rem",
                            }}
                          />
                          <span className='text-2xl'>
                            USERS TYPE
                          </span>
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </div>
  )
};

export default SideBar;