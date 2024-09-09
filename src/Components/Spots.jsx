import { useLoaderData } from "react-router-dom";
import SpotsCard from "./SpotsCard";
import { useState, useEffect } from "react";

const Spots = () => {
    const spotsData = useLoaderData();
    const [spots, setSpots] = useState(spotsData);
    const [sortOrder, setSortOrder] = useState("ascending");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(spots.length / itemsPerPage);

    // Handle sorting
    const handleSortByAverageCost = () => {
        const sortedSpots = [...spots].sort((a, b) => {
            const costA = parseFloat(a.average_cost);
            const costB = parseFloat(b.average_cost);
            return sortOrder === "ascending" ? costA - costB : costB - costA;
        });

        setSpots(sortedSpots);
        setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    };

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Slice spots array for the current page
    const currentSpots = spots.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="bg-white dark:bg-slate-500">
            <div className="mx-auto p-2">
                {/* <h3 className="text-3xl text-center dark:text-white font-bold my-3">
                    Tourists Spots: {spots.length}
                </h3> */}
                <div className="text-center mb-4">
                    <button 
                        className="btn btn-primary" 
                        onClick={handleSortByAverageCost}
                        aria-label={`Sort by Average Cost in ${sortOrder === "ascending" ? "ascending" : "descending"} order`}
                    >
                        Sort by Average Cost {sortOrder === "ascending" ? "↑" : "↓"}
                    </button>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {currentSpots.map(spot => <SpotsCard key={spot._id} spot={spot} />)}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 mx-1 rounded ${
                                currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Spots;
