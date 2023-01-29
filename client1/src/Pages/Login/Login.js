import './login.css'

const Login = () => {
  return (
    <div className='login' >
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">WasteBook</h3>
                <span className="loginDisc">
                    Connect with anyone and waste your valuable time just scrolling this app 
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' type="text" className="loginInput" />
                    <input placeholder='Password' type="text" className="loginInput" />
                    <button className='loginButton'>Login Button</button>
                    <span className='loginForgot'>Forget Password</span>
                    <button className='loginRegisterBtn'>Creat a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login