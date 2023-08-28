import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AuthProvider } from './auth'
import Login from './component/auth/login/login'
import ResetPassword from './component/auth/reset/resetPassword'
import CodeVerify from './component/auth/reset/verifyCode'
import ResetPasswordMain from "./component/auth/reset/resetPasswordMain";
import Home from "./component/file/home/Home";
import Dashboard from "./component/file/dashboard/Dashboard";
import NotFound from "./component/file/404/NotFound";
import Moderator from "./component/file/Moderator/Moderator";
import AddModerator from "./component/file/Moderator/AddModerator";
import Supplier from "./component/file/Supplier/Supplier";
import AddSupplier from "./component/file/Supplier/AddSupplier";
import Seller from "./component/file/Seller/Seller";
import Order from "./component/file/Order/Order";
import Product from "./component/file/Product/Product";
import Payment from "./component/file/Payment/Payment";
import Setting from './component/file/Settings/Setting'




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
               <Route path="" element={<Dashboard/>} />
               <Route path="moderator" element={<Moderator/>} >
                   <Route path="add" element={<AddModerator/>} />
               </Route>
               <Route path="supplier" element={<Supplier/>} >
                   <Route path="add" element={<AddSupplier/>} />
               </Route>
               <Route path="seller" element={<Seller/>} />
               <Route path="orders" element={<Order/>} />
               <Route path="product" element={<Product/>} />
               <Route path="payments" element={<Payment/>} />
               <Route path="settings" element={<Setting/>} />



           </Route>

          <Route path='*' element={<NotFound />} />

      </Routes>
    </AuthProvider>
  )
}

export default App
