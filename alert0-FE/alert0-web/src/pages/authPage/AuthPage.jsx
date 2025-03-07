    import React from 'react'
    import Registration from '../../components/Auth/Registration'
    import Login from '../../components/Auth/Login'
    import { useState } from 'react'


export const AuthPage = () => {

    const [isLogin,setIsLogin] = useState(false)

    const toggle = () => {
        setIsLogin((prev =>!prev))
    }
  return (
            <>
               {!isLogin?   <Registration toggle={toggle} /> : <Login toggle={toggle} />}
            </>
  )
}


export default AuthPage;