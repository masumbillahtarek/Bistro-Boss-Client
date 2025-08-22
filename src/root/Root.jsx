import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Root = () => {
    const location=useLocation()
    console.log(location)
    const noHeaderFooter=location.pathname.includes('/login')|| location.pathname.includes('/register')
    return (
        <div >
           <div className="max-w-screen-xl mx-auto">
             {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           </div>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Root;