import { Navigate, useLocation } from 'react-router-dom'
import isTokenExpired from "./component/auth/Token/TokenService";


export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const access = localStorage.getItem('access')
  const refresh = localStorage.getItem('refresh')
  if (!((access!==null||refresh!==null)&&(!isTokenExpired(access)||!isTokenExpired(refresh)))) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }
  else {
    return children

  }

}
