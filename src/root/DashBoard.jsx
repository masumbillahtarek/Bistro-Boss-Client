import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../customHook/useCart";


const DashBoard = () => {
    const[cart]=useCart()
    return (
        <div className="flex">
            {/* Dashboard Side Bar*/}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home</NavLink></li>
                     <li><NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})</NavLink></li>
                     <li><NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a Review </NavLink></li>
                     <li><NavLink to="/dashboard/bookings">
                    <FaList></FaList>
                    My Booking</NavLink></li>
                     <div className="divider"></div>
                       <li><NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink></li>
                      <li><NavLink to="/order/salad">
                    <FaSearch></FaSearch>
                    Menu</NavLink></li>
                </ul>
            </div>
                {/* Dashboard Content*/}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;