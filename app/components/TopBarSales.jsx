import React from "react";
const TopBarSales = () => {
    return (
      <div className="flex justify-between items-center bg-white p-4 shadow">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-2 rounded-md"
          />
        </div>
        <div className="flex items-center">
          <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">Export</button>
          <button className="mx-2 px-4 py-2 bg-gray-200 rounded">More actions</button>
          <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded">Create order</button>
        </div>
      </div>
    );
  };
  
  export default TopBarSales;
  