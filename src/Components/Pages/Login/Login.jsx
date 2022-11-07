import React from 'react'

export const Login = () => {
  return (
    <div>Login</div>
  )
}


/* import { useState } from 'react'

export const Login = () => {
  const appState = useAppState()
  const appDispatch = useDispatch()

  const [user, setUser] = useState({
    username: "",
    password: ""
  })
const handleChange = (e) => {
  const value = e.target.value;
  setUser({
    ...user,
    [e.target.name] : value
  })
}

console.log(user)
  return (
    <form>
      <input type="text" name="username" onChange={(e) => handleChange(e)}/>
      <inpute type="password" name="password" onChange={(e) => handleChange(e)}/>
      <button>Login</button>
    </form>
  )
}
 */