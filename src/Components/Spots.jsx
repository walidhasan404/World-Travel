import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";
import { useState } from "react";

const Spots = () => {
    const spotsData = useLoaderData();
    const [spots, setSpots] = useState(spotsData);
    const [sortOrder, setSortOrder] = useState("ascending");

    const handleSortByAverageCost = () => {
        const sortedSpots = [...spots].sort((a, b) => {
            const costA = parseFloat(a.average_cost);
            const costB = parseFloat(b.average_cost);
            return sortOrder === "ascending" ? costA - costB : costB - costA;
        });

        setSpots(sortedSpots);
        setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-500">
            <div className="mx-auto p-2">
                <h3 className="text-3xl text-center dark:text-white font-bold my-3">Tourists Spots: {spots.length}</h3>
                <div className="text-center mb-4">
                    <button className="btn btn-primary" onClick={handleSortByAverageCost}>
                        Sort by Average Cost {sortOrder === "ascending" ? "↑" : "↓"}
                    </button>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {spots.map(spot => <SpotsCard key={spot._id} spot={spot} />)}
                </div>
            </div>
        </div>
    );
};

export default Spots;
