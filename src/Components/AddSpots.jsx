import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddSpots = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

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
        const user_email = user.email;
        const user_name = user.displayName || user.name;
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
                    navigate("/mylist");
                }
            })
    }

    return (
        <div className='m-4 bg-blue-50 dark:bg-slate-500 p-4'>
            <h2 className="text-3xl mb-2 text-center dark:text-white">Add Tourist Spots</h2>
            <form onSubmit={handleAddSpots}>
                <div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input required name="tourists_spot_name" type="text" className="grow" placeholder="Tourists Spot Name" />
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <select name="country_Name" className="grow" required>
                                    <option value="" disabled selected>Country</option>
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
                                <input required name="location" type="text" className="grow" placeholder="Location" />
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input required name="short_description" type="text" className="grow" placeholder="Short Description" />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input required name="average_cost" type="text" className="grow" placeholder="Average Cost" />
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <select name="seasonality" className="grow" required>
                                    <option value="" disabled selected>Seasonality</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Rainy</option>
                                    <option value="Autumn">Autumn</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 mb-4">
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <select name="travel_time" className="grow text-sm" required>
                                    <option value="" disabled selected>Travel Time</option>
                                    <option className='text-sm' value="1">Typically a half day trip, but can stay longer.</option>
                                    <option className='text-sm' value="2">Typically a full day trip, but can stay longer.</option>
                                    <option className='text-sm' value="3">A 2-3 days trip is common, but can stay longer.</option>
                                    <option className='text-sm' value="4">Typically a 5-7 days trip, but can stay longer.</option>
                                </select>
                            </label>
                        </div>
                        <div className="lg:w-1/2">
                            <label className="input input-bordered flex items-center w-full gap-2">
                                <input required name="total_visitors_per_year" type="text" className="grow" placeholder="Total Visitors Per Year" />
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
                            <input required name="photo" type="text" className="grow" placeholder="PhotoUrl" />
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