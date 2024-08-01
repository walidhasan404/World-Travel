import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme)
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('Log out successful'))
            .catch(error => console.log(error));
    };

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all">All Tourist Spots</NavLink></li>
            <li><NavLink to="/add">Add Tourist Spots</NavLink></li>
            <li><NavLink to="/mylist">My Spots</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-xl px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="lg:text-3xl md:text-xl text-lg font-bold">Explore <br className="lg:hidden md:hidden"/> World</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                {user ? (
                    <>
                        <div 
                            className="tooltip flex items-center"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <button className="mx-2">
                                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                            </button>
                            {showTooltip && (
                                <div className="tooltip-text absolute bg-base-200 text-base-content p-2 rounded-md shadow-md mt-2">
                                    {user.displayName}
                                </div>
                            )}
                        </div>
                        <button onClick={handleThemeToggle} className="btn btn-md bg-slate-300 mr-2 btn-default"><MdOutlineDarkMode/></button>
                        <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                    </>
                ) : (
                    <>  
                        <button onClick={handleThemeToggle} className="btn btn-md bg-slate-300 btn-default mr-2"><MdOutlineDarkMode/></button>
                        <Link to="/login" className="btn btn-primary mr-2">Login</Link>
                        <Link to="/signup" className="btn btn-primary">Signup</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
