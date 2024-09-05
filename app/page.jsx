// pages/index.js
"use client"
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import AnalyticsCard from './components/AnalyticsCard';
import { useEffect, useState } from 'react';
import SalesCard from './components/SalesCard';

const HomePage = () => {
  const [sessions,setSessions]=useState("")
  const [trend,setTrend]=useState("")
  const [sales,setSales]=useState("")
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  const storeinfo=()=>{

    setSessions(getRandomInt(9999))
    setTrend(getRandomInt(99))
    setSales(getRandomInt(99999))
    
    

  }
  

 
  const analyticsData = [
    { title: 'Online store sessions', value: sessions, trend: trend },
    // { title: 'Online store conversion rate', value: '0%', trend: 0 },
    // { title: 'Total sales', sales: sales, trend: 0 },
    // { title: 'Sales attributed to marketing', value: '₹0.00', trend: 100 },
    // { title: 'Orders attributed to marketing', value: '0', trend: 100 },
  ];
  const salesData=[
     { title: 'Total sales', sales: sales, trend: 0 }
  ]
  useEffect(()=>{
    // storeinfo()
    const myTimeout = setTimeout(storeinfo, 2500);
    // clearTimeout(myTimeout);

  },[sessions])
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <div className="p-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {analyticsData.map((item, index) => (
            <AnalyticsCard
              key={index}
              title={item.title}
              value={item.value}
              // sales={item.sales}
              trend={item.trend}
            />
          ))}
          {salesData.map((item,index)=>(
            <SalesCard
            key={index}
            title={}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
