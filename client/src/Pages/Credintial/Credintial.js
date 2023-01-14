// import { Outlet } from "react-router-dom"
import { Login } from "./Login"
// import Signup from "./Signup"

const Credintial = () => {

  return (
    <>
      <div className="w-full grid place-items-center h-screen inset-0 my-auto">

        <div className="first flex justify-center items-center">

          <div className="image hidden sm:block ">
            <img src={image} className=" h-96 w-72" alt="imag" />
          </div>

            {/* <Outlet/> */}

        </div>
      </div>
    </>
  )
}

export default Credintial