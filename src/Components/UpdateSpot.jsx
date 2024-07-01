import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateSpot = () => {

    const updatedSpot = useLoaderData();
    const { _id, photo, tourists_spot_name, location, average_cost, seasonality, travel_time, total_visitors_per_year, country_Name, short_description, user_email, user_name } = updatedSpot;

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
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
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
        console.log(UpdatedSpot);


        fetch(`https://explore-world-orpin.vercel.app/spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "This Spot updated successfully",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="mx-4 p-2 bg-blue-50">
            <h2 className="text-xl text-center font-bold mb-2">Update Spot: {tourists_spot_name}</h2>
            <form onSubmit={handleUpdateSpots}>
                <div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="tourists_spot_name" defaultValue={tourists_spot_name} type="text" className="grow" placeholder="Tourists Spot Name" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="country_Name" defaultValue={country_Name} type="text" className="grow" placeholder="Country Name" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="location" defaultValue={location} type="text" className="grow" placeholder="Location" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="short_description" defaultValue={short_description} type="text" className="grow" placeholder="Short Description" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="average_cost" defaultValue={average_cost} type="text" className="grow" placeholder="Average Cost" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="seasonality" defaultValue={seasonality} type="text" className="grow" placeholder="Seasonality" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="travel_time" defaultValue={travel_time} type="text" className="grow" placeholder="Travel Time" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="total_visitors_per_year" defaultValue={total_visitors_per_year} type="text" className="grow" placeholder="Total Visitors Per Year" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="user_email" defaultValue={user_email} type="email" className="grow" placeholder="User Email" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="user_name" defaultValue={user_name} type="text" className="grow" placeholder="User Name" />
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