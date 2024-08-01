import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "./Providers/AuthProvider";

const UpdateSpot = () => {
    const updatedSpot = useLoaderData();
    const { _id, photo, tourists_spot_name, location, average_cost, seasonality, travel_time, total_visitors_per_year, country_Name, short_description, user_email, user_name } = updatedSpot;
    const {user} = useContext(AuthContext);

    const handleUpdateSpots = event => {
        event.preventDefault();
        const form = event.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const photo = form.photo.value;

        const UpdatedSpot = {
            tourists_spot_name,
            country_Name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            total_visitors_per_year,
            user_email,
            user_name,
            photo
        };

        fetch(`https://explore-world-orpin.vercel.app/spots/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "This Spot updated successfully",
                        icon: "success"
                    });
                }
            });
    }

    return (
        <div className="mx-4 p-2 bg-blue-50">
            <h2 className="text-xl text-center font-bold mb-2">Update Spot: {tourists_spot_name}</h2>
            <form onSubmit={handleUpdateSpots}>
                <div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="tourists_spot_name" defaultValue={tourists_spot_name} type="text" className="grow" placeholder="Tourists Spot Name" />
                            </label>
                        </div>
                        <div className="Lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <select name="country_Name" className="grow" defaultValue={country_Name} disabled>
                                    <option value="" disabled>Country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="location" defaultValue={location} type="text" className="grow" placeholder="Location" />
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="short_description" defaultValue={short_description} type="text" className="grow" placeholder="Short Description" />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="average_cost" defaultValue={average_cost} type="text" className="grow" placeholder="Average Cost" />
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <select name="seasonality" className="grow" defaultValue={seasonality}>
                                    <option value="" disabled>Seasonality</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Rainy">Rainy</option>
                                    <option value="Autumn">Autumn</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <select name="travel_time" className="grow text-sm" defaultValue={travel_time}>
                                    <option value="" disabled>Travel Time</option>
                                    <option className='text-sm' value="1">Typically a half day trip, but can stay longer.</option>
                                    <option className='text-sm' value="2">Typically a full day trip, but can stay longer.</option>
                                    <option className='text-sm' value="3">A 2-3 days trip is common, but can stay longer.</option>
                                    <option className='text-sm' value="4">Typically a 5-7 days trip, but can stay longer.</option>
                                </select>
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="total_visitors_per_year" defaultValue={total_visitors_per_year} type="text" className="grow" placeholder="Total Visitors Per Year" />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input
                                    name="user_email"
                                    type="email"
                                    className="grow"
                                    defaultValue={user.email}
                                    readOnly
                                />
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="user_name" type="text" className="grow" defaultValue={user.displayName} readOnly />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <label className="input input-bordered flex items-center w-full gap-2">
                            <input name="photo" defaultValue={photo} type="text" className="grow" placeholder="PhotoUrl" />
                        </label>
                    </div>
                    <div className="mt-4 mx-2">
                        <input type="submit" value="Update your Spot" className="btn btn-primary my-4 w-full" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateSpot;
