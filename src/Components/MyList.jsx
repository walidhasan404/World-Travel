import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Providers/AuthProvider";

const MyList = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://explore-world-orpin.vercel.app/spots/user/${user.email}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(data => {
                setSpots(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [user.email]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleDelete = _id => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://explore-world-orpin.vercel.app/spots/${_id}`, {
              method: 'DELETE'
            })
              .then(res => {
                if (!res.ok) {
                  throw new Error('Failed to delete spot');
                }
                return res.json();
              })
              .then(data => {
                if (data.success) {
                  Swal.fire("Deleted!", "Your Spot has been deleted.", "success");
                  setSpots(prevSpots => prevSpots.filter(spot => spot._id !== _id));
                } else {
                  throw new Error(data.message || 'Failed to delete spot');
                }
              })
              .catch(error => {
                Swal.fire("Error!", error.message, "error");
                console.error(error);
              });
          }
        });
      }
      

    return (
        <Fade>
            <div className="p-4 grid grid-cols-1 bg-slate-50 dark:bg-slate-500">
                {spots.map(spot => (
                    <div key={spot._id}>
                        <div className="hidden lg:inline">
                            <table className="table w-full border-collapse border border-black">
                                <tbody>
                                    <tr>
                                        <td className="border border-black">
                                            <img src={spot.photo} alt="Shoes" className="w-24 h-24" />
                                        </td>
                                        <td className="border border-black p-2">
                                            <h2 className="text-lg font-bold">{spot.tourists_spot_name}</h2>
                                            <p>{spot.location}</p>
                                        </td>
                                        <td className="border border-black p-2">
                                            <p><span className="font-bold">Season:</span> {spot.seasonality}</p>
                                            <p><span className="font-bold">Average Cost:</span> {spot.average_cost}</p>
                                            <p><span className="font-bold">Travel time:</span> {spot.travel_time}</p>
                                            <p><span className="font-bold">Visitors Every Year:</span> {spot.total_visitors_per_year}</p>
                                        </td>
                                        <td className="border border-black p-2">
                                            <div className="flex flex-col gap-2">
                                                <button onClick={() => handleDelete(spot._id)} className="btn btn-error">Delete</button>
                                                <Link to={`/updateSpot/${spot._id}`} className="btn btn-accent">Update</Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="lg:hidden">
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={spot.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-lg font-bold">{spot.tourists_spot_name}</h2>
                                    <p>{spot.location}</p>
                                    <p><span className="font-bold">Season:</span> {spot.seasonality}</p>
                                    <p><span className="font-bold">Average Cost:</span> {spot.average_cost}</p>
                                    <p><span className="font-bold">Travel time:</span> {spot.travel_time}</p>
                                    <p><span className="font-bold">Visitors Every Year:</span> {spot.total_visitors_per_year}</p>
                                    <div className="card-actions">
                                        <div className="flex justify-between gap-2">
                                            <button onClick={() => handleDelete(spot._id)} className="btn btn-error">Delete</button>
                                            <Link to={`/updateSpot/${spot._id}`} className="btn btn-accent">Update</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fade>
    );
};

export default MyList;
