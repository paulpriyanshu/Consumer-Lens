// components/AnalyticsCard.js
"use client"
import { useEffect, useState } from 'react';

const AnalyticsCard = ({ title, value, trend }) => {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    // Update the previous value when the current value changes
    if (value !== prevValue) {
      setPrevValue(value);
    }
  }, [value]);

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-11/12 h:full p-4">
      <div className="shadow-sm p-6 rounded-lg bg-slate-300 py-20">
        <h3 className="text-gray-500 text-3xl">{title}</h3>
        
        {/* Apply transition class for smooth number changes */}
        <p className={`text-5xl font-semibold value-transition`}>
          {value}
        </p>
        
        <p className={`text-2xl ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend >= 0 ? `↑ ${trend}%` : `↓ ${Math.abs(trend)}%`}
        </p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
