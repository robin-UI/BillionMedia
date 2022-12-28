import image from "./assets/img.png"

const Credintial = () => {
  return (
    <div className="w-full h-full">
      <div className="first ">
        <div className="image col-span-5">
          <img src={image} className=" h-96 w-72" alt="imag" />
        </div>


        <div className="inputSession">
          <div>
            <div className="maindiv w-72">
              <div className="logo bg-slate-700 h-12 my-5 "></div>
              <div className="flex justify-center bg-zinc-50">
                <div className="w-60">
                  <input className="rounded border-2 w-60 mt-3 h-9" type="text" placeholder="Usernam" />
                  <input className="rounded border-2 w-60 mt-3 h-9" type="text" placeholder="Password" />
                  <button className="bg-teal-500 w-60 h-8 rounded mt-3 mb-3">Login</button>
                </div>
              </div>
            </div>

            <div className="mt-3 border flex justify-center w-72">
              <div className="my-5">
                <p>Dont have an account? <span className="text-teal-500">SignUp</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Credintial