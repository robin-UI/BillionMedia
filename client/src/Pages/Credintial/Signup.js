import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "./assets/img.png"

const Signup = () => {

    const [signup, setSignup] = useState({
        username: "",
        name: "",
        email: "",
        phone: "",
        password: "",
    })
    const { username, name, email, phone, password } = signup

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(signup);
        axios
            .post("http://localhost:5000/users/signup", {
                username:username,
                name: name,
                email: email,
                number: phone,
                password: password,
            }) 
            .then((response) => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }


  const onChange = (e) => {
    setSignup({...signup, [e.target.name]: e.target.value})

  }

    return (
        <>
            <div className="w-full grid place-items-center h-screen inset-0 my-auto">

                <div className="first flex justify-center items-center">

                    <div className="image hidden sm:block ">
                        <img src={image} className=" h-96 w-72" alt="imag" />
                    </div>
                    <div className="hii" >
                        <div>
                            {/* <form onSubmit={handleSubmit} > */}
                                <div className="maindiv w-72">
                                    <div className="logo bg-slate-700 h-12 my-5 "></div>
                                    <div className="flex justify-center bg-zinc-50">
                                        <div className="w-60">
                                            <input className="rounded border-2 w-60 mt-3 h-9" type="text" onChange={onChange} name='username' placeholder="Username" />
                                            <input className="rounded border-2 w-60 mt-3 h-9" type="text" onChange={onChange} name='name' placeholder="Name" />
                                            <input className="rounded border-2 w-60 mt-3 h-9" type="text" onChange={onChange} name='email' placeholder="Email" />
                                            <input className="rounded border-2 w-60 mt-3 h-9" type="text" onChange={onChange} name='phone' placeholder="Phone number" />
                                            <input className="rounded border-2 w-60 mt-3 h-9" type="text" onChange={onChange} name='password' placeholder="Password" />
                                            <input className="rounded border-2 w-60 mt-3 h-9" type="text" placeholder="Conform Password" />
                                            <button type='submit' className="bg-teal-500 w-60 h-8 rounded mt-3 mb-3" onClick={handleSubmit}>SignUp</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 border flex justify-center w-72">
                                    <div className="my-5">
                                        <p>Have an account? <span className="text-teal-500 cursor-pointer" >
                                            <button >
                                                <Link to='/login'> Login</Link>
                                            </button>
                                        </span></p>
                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup