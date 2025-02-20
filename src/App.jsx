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
import UserLeaveSection from './Component/UserSide/UserLeaveSection'
import AnnualLeave from './Component/UserSide/AnnualLeave'
import SickLeave from './Component/UserSide/SickLeave'
import MaternityLeave from './Component/UserSide/MaternityLeave'
import CompLeave from './Component/UserSide/CompLeave'
import UpdateProfile from './Component/UserSide/UpdateProfile'
import EducationDetails from './Component/UserSide/EducationDetails'

import UploadDocuments from './Component/UserSide/UploadDocuments'
import ViewFinancialDetails from './Component/UserSide/ViewFinancialDetails'



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
          <Route path="/leave-application" element={<UserLeaveSection />} /> 
          <Route path="/apply-leave" element={<AnnualLeave/>}/>
          <Route path="/apply-sickleave" element={<SickLeave/>}/>
          <Route path="/apply-maternityleave" element={<MaternityLeave/>}/>
          <Route path="/apply-compassionateleave" element={<CompLeave/>}/>
          <Route path="/userprofile" element={<UpdateProfile/>}/>
          <Route path="/education-details" element={<EducationDetails/>}/>
          <Route path='/upload-documents' element={<UploadDocuments/>}/>
          <Route  path='/financial-details' element={<ViewFinancialDetails/>}/>
      </Routes>
     </Router>

    </>
  )
}

export default App
