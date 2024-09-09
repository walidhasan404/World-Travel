import { Link, useLoaderData } from "react-router-dom";
import ContactUs from "./ContactUs";
import SpotsCard from "./SpotsCard";
import Countries from "./Countries";
import Banner from "./Banner";

const Home = () => {

    const spots = useLoaderData();

    return (
        <div className="bg-white dark:bg-slate-500">
            <Banner></Banner>
            <Countries></Countries>
            <div className="mt-6 bg-white p-4">
                <h3 className="md:text-3xl lg:text-4xl text-2xl text-center dark:text-white font-extrabold my-8">Tourists Spots</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        spots.map(spot => <SpotsCard
                            key={spot._id}
                            spot={spot}
                        ></SpotsCard>)
                    }
                </div>
                <div className="text-center m-4 lg:m-6">
                    <Link to="/all"><button className="btn btn-primary">All Spots</button></Link>
                </div>
            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;