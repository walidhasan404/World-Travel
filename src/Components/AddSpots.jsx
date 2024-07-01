import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './Providers/AuthProvider';

const AddSpots = () => {

    const { loggedInUser } = useContext(AuthContext);

    const handleAddSpots = event => {
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
        const user_email = loggedInUser.email;
        const user_name = form.user_name.value;
        const photo = form.photo.value;

        const newTouristsSpot = {
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
        console.log(newTouristsSpot);


        fetch('https://explore-world-orpin.vercel.app/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "This Spot added successfully",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className='m-4 bg-blue-50 p-4'>
            <h2 className="text-3xl">Add Tourist Spots</h2>
            <form onSubmit={handleAddSpots}>
                <div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="tourists_spot_name" type="text" className="grow" placeholder="Tourists Spot Name" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="country_Name" type="text" className="grow" placeholder="Country Name" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="location" type="text" className="grow" placeholder="Location" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="short_description" type="text" className="grow" placeholder="Short Description" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="average_cost" type="text" className="grow" placeholder="Average Cost" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="seasonality" type="text" className="grow" placeholder="Seasonality" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="travel_time" type="text" className="grow" placeholder="Travel Time" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="total_visitors_per_year" type="text" className="grow" placeholder="Total Visitors Per Year" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input
                                    name="user_email"
                                    type="email"
                                    className="grow"
                                    placeholder="User Email"
                                />
                            </label>
                        </div>

                        <div className="w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input name="user_name" type="text" className="grow" placeholder="User Name" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <label className="input input-bordered flex items-center w-full gap-2">
                            <input name="photo" type="text" className="grow" placeholder="PhotoUrl" />
                        </label>
                    </div>
                    <div className="mt-4">
                        <input type="submit" value="Add this Spot" className="btn btn-primary mt-4 w-full" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddSpots;