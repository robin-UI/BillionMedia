import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Login = ({ onIdSubmit,id }) => {

    const idRef = useRef();
    const handlesubmit = (e) => {
      e.preventDefault()
      onIdSubmit(idRef.current.value)
    }
    

    function createNewId() {
      onIdSubmit(uuidv4())
    }

  return (
    <div>Login
        <label htmlFor="text">EnterId</label>
        <input type="text" ref={idRef} />
        <button type='submit' onClick={handlesubmit}>Login</button>
        <button type="button" onClick={createNewId} >Create an Id</button>
    </div>
  )
}

export default Login