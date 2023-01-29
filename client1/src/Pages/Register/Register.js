import './register.css'

const Register = () => {
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
                    <input placeholder='UserName' type="text" className="loginInput" />
                    <input placeholder='Email' type="text" className="loginInput" />
                    <input placeholder='Password' type="text" className="loginInput" />
                    <input placeholder='Password again' type="text" className="loginInput" />
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegisterBtn'>Login Exesting Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register