import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Sidebar from './Component/Sidebar'
import MainSection from './Component/MainSection'
import Login from './Component/Login'
import LeaveSection from './Component/LeaveSection'
import RegisterPage from './Component/UserSide/RegisterPage'
import LoginPage from './Component/UserSide/LoginPage'
import UserDashboard from './Component/UserSide/UserDashboard'
import EmployeeManagement from './Component/EmployeeManagement'
import EmployeeDetails from './Component/EmployeeDetails'
import PerformanceManagement from './Component/PerformanceManagement'

function App() {
  

  return (
    <>
      
     <Router>
      <Routes>
        <Route path="login" Component={Login}/>
         <Route path="/" Component={MainSection}/>
         <Route path="/leave-management" Component={LeaveSection}/>
         <Route path="/employee-management" Component={EmployeeManagement}/>
         <Route path="/employee-details" Component={EmployeeDetails}/>
         <Route path="/performance-management" Component={PerformanceManagement}/>
          





         {/* UserSide  */}
         <Route path="register" Component={RegisterPage}/>
         <Route path="loginuser" Component={LoginPage}/>
          <Route path="user" Component={UserDashboard}/>
      </Routes>
     </Router>

    </>
  )
}

export default App
