// components/Sidebar.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar bg-gray-100 p-4 w-1/6">
      <ul className="flex flex-col justify-center ">
        <h1 className="flex justify-center border border-b-slate-100 w-full hover:cursor-pointer">
            <img src='logo.png' width={150} height={100} onClick={()=>router.push('/')} />
        </h1>
        <li className="py-2  ">
          <button  className="rounded-xl" onClick={() => router.push('/')} >
            <h1 className="text-2xl font-sans font-bold p-2 px-5 ">
                Home
            </h1>
          </button>
        </li>
        <li className="py-2">
          <button  className="rounded-xl" onClick={() => router.push('/flaggedusers')} >
            <h1 className="text-2xl font-sans  font-bold p-2 px-5 ">
                Users
            </h1>
          </button>
        </li>
        <li className="py-2 ">
          <button className="rounded-xl" onClick={() => router.push('/order')}>
           
            <h1 className="text-2xl font-sans font-bold p-2 px-5">
            Orders
            </h1>
          </button>
        </li>
        <li className="py-2 ">
          <button className="rounded-xl" onClick={() => router.push('/products')}>
           
            <h1 className="text-2xl font-sans font-bold p-2 px-5">
            Product
            </h1>
          </button>
        </li>
        {/* <li className="py-2 ">
          <button className="rounded-xl" onClick={() => router.push('/customers')}>
          <h1 className="text-2xl font-sans font-bold p-2 px-5">
          Customers
            </h1>
          
          </button>
        </li> */}
        <li className="py-2 ">
          <button  className="rounded-xl" onClick={() => router.push('/analytics')}>
          <h1 className="text-2xl font-sans font-bold p-2 px-5">
          Analytic
        </h1>
            
          </button>
        </li>
        <li className="py-2 ">
          <button className="rounded-xl" onClick={() => router.push('/marketing')}>
          <h1 className="text-2xl font-sans font-bold p-2 px-5">
          Marketing
            </h1>
            
          </button>
        </li>
        <li className="py-2 ">
          <button className="rounded-xl" onClick={() => router.push('/settings')}>
          <h1 className="text-2xl font-sans font-bold p-2 px-5">
          Settings
        </h1>
           
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
