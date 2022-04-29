import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Loginpage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form
        onSubmit={loginUser}
        encType="application/x-www-form-urlencoded"
      >
        <input type="text" name="username" placeholder='Enter Username' />
        <input type="password" name="password" placeholder='Enter Password' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Loginpage