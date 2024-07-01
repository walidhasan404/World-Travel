import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {

    const spot = useLoaderData();
    console.log(spot);

    return (
        <div className="mx-2 p-2">
            <h3 className="my-4 text-2xl text-center font-bold">Spot Details</h3>
            <h3 className="text-center text-base font-medium my-2">{spot.tourists_spot_name}</h3>
            <img className="mb-2 mx-auto" src={spot.photo} alt="" />
            <p className="text-center">{spot.short_description
            }</p>
            <div className="p-2">
                <p className="text-base font-medium">Visitors per year: <span className="text-sm font-normal">{spot.total_visitors_per_year
                }</span></p>
                <p className="text-base font-medium">Travel time: <span className="text-sm font-normal">{spot.travel_time
                }</span></p>
                <p className="text-base font-medium">Average Cost: <span className="text-sm font-normal">{spot.average_cost}</span></p>
            </div>
        </div>
    );
};

export default SpotDetails;
