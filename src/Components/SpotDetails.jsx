import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  console.log(spot);

  return (
    <div className="mx-4 p-5 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <h4 className="text-center text-3xl font-bold my-4 text-gray-700">
        {spot.tourists_spot_name}
      </h4>
      <img
        className="mb-6 mx-auto rounded-lg shadow-md border border-gray-200"
        src={spot.photo}
        alt={spot.tourists_spot_name}
      />
      <p className="text-center text-lg mb-6 text-gray-600 leading-relaxed">
        {spot.short_description}
      </p>
      <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
        <p className="text-lg font-medium mb-4 text-gray-700">
          Visitors per year:{" "}
          <span className="text-base font-normal text-gray-600">
            {spot.total_visitors_per_year}
          </span>
        </p>
        <p className="text-lg font-medium mb-4 text-gray-700">
          Travel time:{" "}
          <span className="text-base font-normal text-gray-600">
            {spot.travel_time}
          </span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Average Cost:{" "}
          <span className="text-base font-normal text-gray-600">
            {spot.average_cost}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SpotDetails;
