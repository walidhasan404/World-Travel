import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {

    const [showTooltip, setShowTooltip] = useState(false);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all">All Tourist Spots</NavLink></li>
        <li><NavLink to="/add">Add Tourist Spots</NavLink></li>
        <li><NavLink to="/mylist">My Spots</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('log out successful'))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="lg:text-2xl md:text-xl text-lg font-bold">Explore World</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="tooltip relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                                    <button className="btn">
                                        <CgProfile />
                                    </button>
                                    {showTooltip &&
                                        <div className="tooltip-text absolute bg-base-200 text-base-content p-2 rounded-md shadow-md mt-2 w-auto">
                                            {user.email}
                                        </div>
                                    }
                                </div>

                                <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                            </> :

                            <div className="navbar-end flex">
                                <Link to="/login"><a className="btn btn-primary mr-2">Login</a></Link>
                                <Link to="/signup"><a className="btn btn-primary">Signup</a></Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;