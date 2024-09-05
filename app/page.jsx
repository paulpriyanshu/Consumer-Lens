// pages/index.js
"use client"
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import AnalyticsCard from './components/AnalyticsCard';
import { useEffect, useState } from 'react';
import SalesCard from './components/SalesCard';
import LineChartComponent from './components/LineChartComponent';
import SplashScreen from './components/SplashScreen';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);
  const [sessions,setSessions]=useState("")
  const [trend,setTrend]=useState("")
  const [sales,setSales]=useState("")
  function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // console.log(getRandomInt(3));
  const storeinfo=()=>{

    setSessions(getRandomInt(5000, 9999));
    setTrend(getRandomInt(50, 99));
    setSales(getRandomInt(80000, 99999));
    

  }
  

 
  const analyticsData = [
    { title: 'Online store sessions', value: sessions, trend: trend },
    // { title: 'Online store conversion rate', value: '0%', trend: 0 },
    // { title: 'Total sales', sales: sales, trend: 0 },
    // { title: 'Sales attributed to marketing', value: '₹0.00', trend: 100 },
    // { title: 'Orders attributed to marketing', value: '0', trend: 100 },
  ];
  const salesData=[
     { title: 'Total sales', sales: sales, trend: trend }
  ]
  useEffect(()=>{
    // storeinfo()
    const myTimeout = setTimeout(storeinfo, 2000);
    // clearTimeout(myTimeout);

  },[sessions])
  return (<div>{
      !isLoaded ? <SplashScreen/> : <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <div className="p-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {analyticsData.map((item, index) => (
            <AnalyticsCard
              key={index}
              title={item.title}
              value={item.value}
              trend={item.trend}
            />
          ))}
          {salesData.map((item,index)=>(
            <SalesCard
            key={index}
            title={item.title}
            sales={item.sales}
            trend={item.trend}
            />

          ))}
         
          
        </div>
        <div>
        <LineChartComponent/>
        </div>
      </div>
     
    </div>
    }</div>
    
  );
};

export default HomePage;
