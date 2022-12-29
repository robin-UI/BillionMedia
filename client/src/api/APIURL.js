const port = 3000;
const domane = 'http://localhost:' + port;

const URLS ={
    PORT : port,
    DOMANE: domane,
    CREATEUSER: domane + "/users/signup",
    LOGINUSER: domane + "/users/login",
    EDITUSER: domane + "/users/editUser",
    DELETEUSER: domane + "/users/deleteUser",
    FETCHUSER: domane + "/users/fetchUser",
    FOLLOWUSER: domane + "/users/follow",
    UNFOLLOWUSER: domane + "/users/unfollow",
}

