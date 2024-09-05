"use client";
import { useEffect, useState } from "react";

const OrdersTable = () => {
  // Initial list of orders
  const [orders, setOrders] = useState([
    {
      id: "SL/1014/24-25",
      date: "Jul 30 at 8:40 PM",
      customer: "No customer",
      total: "₹0.00",
      status: "Paid",
      fulfillment: "Fulfilled",
      items: "0 items",
      method: "Shipping",
      canceled: false, // Track if an order is canceled
    },
  ]);

  // Array of Indian names
  const indianNames = [
    "Aarav", "Aditi", "Advait", "Akash", "Ananya", "Arjun", "Ashwini", "Bhavya",
    "Chaitanya", "Deeksha", "Dhruv", "Divya", "Esha", "Gautam", "Harsha", "Isha",
    "Jaya", "Kabir", "Kavya", "Lakshmi", "Madhav", "Meera", "Neha", "Nikhil",
    "Omkar", "Parvati", "Pooja", "Rajesh", "Rakesh", "Riya", "Rohit", "Sakshi",
    "Sanjay", "Saraswati", "Shivam", "Shruti", "Soham", "Sudha", "Swati", "Tarun",
    "Tejas", "Uday", "Vaibhav", "Vani", "Varun", "Vikram", "Vinay", "Yash", "Yogesh", "Zara"
  ];

  // Function to generate a random order
  function generateRandomOrder() {
    const id = `SL/${Math.floor(Math.random() * 1000) + 1000}/24-25`;
    const date = `Jul ${Math.floor(Math.random() * 30) + 1} at ${Math.floor(
      Math.random() * 12
    )}:${Math.floor(Math.random() * 60)} ${Math.random() < 0.5 ? "AM" : "PM"}`;
    const customer = indianNames[Math.floor(Math.random() * indianNames.length)];
    const total = `₹${(Math.random() * 1000).toFixed(2)}`;
    const status = Math.random() < 0.5 ? "Paid" : "Unpaid";
    const fulfillment = Math.random() < 0.5 ? "Fulfilled" : "Not fulfilled";
    const items = `${Math.floor(Math.random() * 10)} items`;
    const method = Math.random() < 0.5 ? "Shipping" : "Pick up";

    return {
      id,
      date,
      customer,
      total,
      status,
      fulfillment,
      items,
      method,
      canceled: false, // Default not canceled
    };
  }

  // Function to randomly insert an order into the list
  function insertRandomOrder() {
    const randomOrder = generateRandomOrder();
    setOrders((prevOrders) => {
      const randomIndex = Math.floor(Math.random() * (prevOrders.length + 1));
      const newOrders = [...prevOrders];
      newOrders.splice(randomIndex, 0, randomOrder);
      return newOrders;
    });
  }

  // Function to randomly cancel an order
  function cancelRandomOrder() {
    setOrders((prevOrders) => {
      if (prevOrders.length > 0) {
        const randomIndex = Math.floor(Math.random() * prevOrders.length);
        const newOrders = [...prevOrders];
        newOrders[randomIndex].canceled = true; // Mark order as canceled

        // Wait for 3 seconds before deleting the order
        setTimeout(() => {
          setOrders((updatedOrders) => {
            const filteredOrders = updatedOrders.filter(
              (order, index) => index !== randomIndex
            );
            return filteredOrders;
          });
        }, 3000);

        return newOrders;
      }
      return prevOrders;
    });
  }

  useEffect(() => {
    // Insert orders more frequently than canceling them
    const insertInterval = setInterval(insertRandomOrder, 500); // Insert every 2 seconds
    const cancelInterval = setInterval(cancelRandomOrder, 6000); // Cancel every 6 seconds

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(insertInterval);
      clearInterval(cancelInterval);
    };
  }, []);

  return (
    <div className="overflow-x-auto border border-slate-600 m-5 rounded-xl h-5/6">
    <div className="relative">
      <table className="w-full bg-white table-fixed">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            <th className="w-1/8 py-2 px-4 text-left">Order</th>
            <th className="w-1/8 py-2 px-4 text-left">Date</th>
            <th className="w-1/8 py-2 px-4 text-left">Customer</th>
            <th className="w-1/8 py-2 px-4 text-left">Total</th>
            <th className="w-1/8 py-2 px-4 text-left">Payment Status</th>
            <th className="w-1/8 py-2 px-4 text-left">Fulfillment Status</th>
            <th className="w-1/8 py-2 px-4 text-left">Items</th>
            <th className="w-1/8 py-2 px-4 text-left">Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className={order.canceled ? "line-through text-red-500" : ""}
            >
              <td className="w-1/8 border py-2 px-4 truncate">{order.id}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.date}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.customer}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.total}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.status}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.fulfillment}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.items}</td>
              <td className="w-1/8 border py-2 px-4 truncate">{order.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
  
};

export default OrdersTable;
