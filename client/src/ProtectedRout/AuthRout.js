import { Navigate } from "react-router-dom";
import HomePage from "../Pages/main/HomePage";

function AuthRout() {

    const isLogedin = localStorage.getItem("adminInfo");
    return isLogedin ? <HomePage/> : <Navigate to="/login" />;

}

export default AuthRout