import { Link } from "react-router-dom";

const SpotsCard = ({ spot }) => {

    const { _id, photo, country_Name, tourists_spot_name, location, average_cost, seasonality, travel_time, total_visitors_per_year } = spot;

    console.log(country_Name);
    console.log(photo);
    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
                <figure className="lg:w-96 h-full mt-2 mx-2"><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p>{location}</p>
                    <p><span className="text-lg font-medium">Season:</span> {seasonality}</p>
                    <p className="text-lg font-medium">Average Cost: <span className="text-sm font-normal">{average_cost}</span></p>
                    <p className="text-lg font-medium">Travel time: <span className="text-sm font-normal">{travel_time}</span></p>
                    <p className="text-lg font-medium">Visitors Every Year: <span className="text-sm font-normal">{total_visitors_per_year}</span></p>
                    <div className="mx-auto">
                        <Link to={`/spot/${_id}`}><button className="btn btn-accent">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotsCard;