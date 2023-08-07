import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AuthProvider } from './auth'
import Login from './component/login/login'
import ResetPassword from './component/reset/resetPassword'
import CodeVerify from './component/reset/verifyCode'

// const LazyAbout = React.lazy(() => import('./About'))

function App() {
  return (
   <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/resetVerify' element={<ResetPassword />} />
        <Route path='/codeVerify' element={<CodeVerify />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        /> */}
        {/* <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        /> */}
        
      </Routes>
    </AuthProvider>
  )
}

export default App
