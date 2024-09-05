// src/components/LineChartComponent.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

// Sample data for the line chart
const data = [
  { name: 'Jan', uv: 400, pv: 2400 },
  { name: 'Feb', uv: 300, pv: 1398 },
  { name: 'Mar', uv: 200, pv: 9800 },
  { name: 'Apr', uv: 278, pv: 3908 },
  { name: 'May', uv: 189, pv: 4800 },
  { name: 'Jun', uv: 239, pv: 3800 },
  { name: 'Jul', uv: 349, pv: 4300 },
];

const LineChartComponent = () => {
  return (
    <Box sx={{ p: 4, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff', maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Monthly Data Overview
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LineChartComponent;