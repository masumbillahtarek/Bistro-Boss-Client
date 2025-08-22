import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
    const navOptions=<>
     <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contactUs">Contact Us</NavLink></li>
           <li><NavLink to="/dashboard">DashBoard</NavLink></li>
              <li><NavLink to="/ourMenu">Our Menu</NavLink></li>
                 <li><NavLink to="/order">Order Food</NavLink></li>
                 
                  <li><NavLink to="/secret">Secret</NavLink></li>
                 
                 {!user && <>
                  <li><NavLink to="/login">Login</NavLink></li>
                 </>}
                 
    </>
    const handleLogout=()=>{
      logOut()
      .then(() => {
 console.log(' Sign-out successful.')
}).catch((error) => {
  console.log(' An error happened.',error)
});
    }
    return (
      <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl mx-auto text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss <br />Resturant</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end ">
    {
      user?<> <p>{user?.displayName}</p><button onClick={handleLogout} className="btn btn-secondary">Logout</button></>:  <a className="btn">Button</a>
    }
  
  </div>
</div>
    );
};

export default Navbar;