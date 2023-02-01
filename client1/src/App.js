import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route exact path="/:username" element={ <Profile/> }/>
        <Route exact path="/login" element={ <Login/> }/>
        <Route exact path="/register" element={ <Register/> }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
