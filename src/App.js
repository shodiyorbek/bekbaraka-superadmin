import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AuthProvider } from './auth'
import Login from './component/auth/login/login'
import ResetPassword from './component/auth/reset/resetPassword'
import CodeVerify from './component/auth/reset/verifyCode'
import ResetPasswordMain from "./component/auth/reset/resetPasswordMain";
import Home from "./component/file/home/Home";
import Test from "./component/file/home/Test";
import Dashboard from "./component/file/dashboard/Dashboard";



function App() {
  return (
   <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/resetVerify' element={<ResetPassword />} />
        <Route path='/codeVerify' element={<CodeVerify />} />
        <Route path='/resetPassword' element={<ResetPasswordMain />} />

           <Route
            path='/'
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
           >
               <Route path="dashboard" element={<Dashboard/>} />
           </Route>


      </Routes>
    </AuthProvider>
  )
}

export default App
