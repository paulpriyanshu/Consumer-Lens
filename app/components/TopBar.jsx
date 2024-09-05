// components/TopBar.js
const TopBar = () => {
    return (
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Marketing</h2>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-gray-200 rounded-md">Last 30 Days</button>
          <button className="ml-4 px-4 py-2 bg-gray-200 rounded-md">Create Campaign</button>
        </div>
      </div>
    );
  };
  
  export default TopBar;
  