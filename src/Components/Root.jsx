import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;