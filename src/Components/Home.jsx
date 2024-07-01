import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import SpotsCard from "./SpotsCard";
import Countries from "./Countries";
import Banner from "./Banner";

const Home = () => {

    const spots = useLoaderData(); 
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className="p-6 bg-white dark:bg-slate-300">
            <button onClick={handleTheme} className="btn btn-sm btn-default my-1">Dark Mode</button>
            <Banner></Banner>
            <Countries></Countries>
            <div>
                <h3 className="text-2xl text-center font-bold my-3">Tourists Spots: {spots.length}</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        spots.map(spot => <SpotsCard
                            key={spot._id}
                            spot={spot}
                        ></SpotsCard>)
                    }
                </div>
            </div>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;