"use client";
import { useEffect, useState } from "react";
import { indianNames } from "../api/actions/names";

const NonFlagged = () => {
  const [orders, setOrders] = useState([]);

  // Function to generate a random order
  function generateRandomOrder() {
    const id = `SL/${Math.floor(Math.random() * 1000) + 1000}/24-25`;
    const date = `Jul ${Math.floor(Math.random() * 30) + 1} at ${Math.floor(
      Math.random() * 12
    )}:${Math.floor(Math.random() * 60)} ${
      Math.random() < 0.5 ? "AM" : "PM"
    }`;
    const customer = indianNames[Math.floor(Math.random() * indianNames.length)];
    const total = `₹${(Math.random() * 1000).toFixed(2)}`;
    const status = Math.random() < 0.5 ? "Paid" : "Unpaid";
    const fulfillment = Math.random() < 0.5 ? "Fulfilled" : "Not fulfilled";
    const items = `${Math.floor(Math.random() * 10)} items`;
    const method = Math.random() < 0.5 ? "Shipping" : "Pick up";
    const canceled = Math.random() < 0.5; // Randomly decide if the order is canceled

    return {
      id,
      date,
      customer,
      total,
      status,
      fulfillment,
      items,
      method,
      canceled,
    };
  }

  // Recursive function to insert random orders using requestAnimationFrame
  function insertRandomOrders(count, insertedCount = 0) {
    if (insertedCount < count) {
      const randomOrder = generateRandomOrder();
      setOrders((prevOrders) => {
        const randomIndex = Math.floor(Math.random() * (prevOrders.length + 1));
        const newOrders = [...prevOrders];
        newOrders.splice(randomIndex, 0, randomOrder);
        return newOrders;
      });
      // Use requestAnimationFrame to schedule the next insertion
      setTimeout(() => {
        requestAnimationFrame(() => insertRandomOrders(count, insertedCount + 1));
      }, 5); // Inserts every 5 milliseconds
    }
  }

  useEffect(() => {
    // Start inserting 100 random orders
    insertRandomOrders(100);
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
            {orders
              .filter((order) => !order.canceled) // Filter to show only non-canceled orders
              .map((order) => (
                <tr key={order.id}>
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

export default NonFlagged;