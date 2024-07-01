import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";

const CountrySpots = () => {
    const [loading, setLoading] = useState(true);
    const countryName = useLoaderData();

    // useEffect(() => {
    //   axios.get(`https://explore-world-orpin.vercel.app/spots/country/${countryName}`)
    //     .then(response => {
    //       setSpots(response.data);
    //       setLoading(false);
    //     })
    //     .catch(error => {
    //       console.error("Error fetching spots:", error);
    //       setLoading(false);
    //     });
    // }, [countryName]);




    return (
        <div className="mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Spots in {countryName[0].country_Name} </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {countryName.map(spot => (
                    <SpotsCard
                        key={spot._id}
                        spot={spot}
                    />
                ))}
            </div>

        </div>
    );
};

export default CountrySpots;
