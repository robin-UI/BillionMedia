import { Navigate } from "react-router-dom";
import HomePage from "../Pages/main/HomePage";

function AuthRout() {

    const isLogedin = false;
    // if (isLogedin) {
    //     return <HomePage />
    // } else {
    //     return (
    //         // <Credintial />
    //         <Navigate to="login" /> 
    //     )
    // }
    return isLogedin ? <HomePage /> : <Navigate to="/login" />;

}

export default AuthRout