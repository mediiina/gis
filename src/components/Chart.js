import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: '12-01-2021',
    PPM: 255,
  },
  {
    date: "12-02-2021",
    PPM: 264,
  },
  {
    date: "12-03-2021",
    PPM: 271,
  },
  {
    date: "12-04-2021",
    PPM: 270,
  },
  {
    date: "12-05-2021",
    PPM: 265,
  },
  {
    date: '12-06-2021',
    PPM: 269,
  },
  {
    date: "12-07-2021",
    PPM: 270,
  },
  {
    date: "12-08-2021",
    PPM: 264,
  },
  {
    date: "12-09-2021",
    PPM: 269,
  },
  {
    date: "12-10-2021",
    PPM: 272,
  },
  {
    date: '12-11-2021',
    PPM: 262,
  },
  {
    date: "12-12-2021",
    PPM: 268,
  },
  {
    date: "12-13-2021",
    PPM: 269,
  },
  {
    date: "12-14-2021",
    PPM: 275,
  },
  {
    date: "12-15-2021",
    PPM: 265,
  },
  {
    date: '12-16-2021',
    PPM: 279,
  },
  {
    date: "12-17-2021",
    PPM: 305,
  },
  {
    date: "12-18-2021",
    PPM: 320,
  },
  {
    date: "12-19-2021",
    PPM: 215,
  },
  {
    date: "12-20-2021",
    PPM: 322,
  },
  {
    date: '12-21-2021',
    PPM: 349,
  },
  {
    date: "12-22-2021",
    PPM: 270,
  },
  {
    date: "12-23-2021",
    PPM: 259,
  },
  {
    date: "12-24-2021",
    PPM: 269,
  },
  {
    date: "12-25-2021",
    PPM: 268,
  },
  {
    date: "12-26-2021",
    PPM: 280,
  },
  {
    date: '12-27-2021',
    PPM: 270,
  },
  {
    date: "12-28-2021",
    PPM: 259,
  },
  {
    date: "12-29-2021",
    PPM: 322,
  },
  {
    date: "12-30-2021",
    PPM: 268,
  },
  {
    date: "12-31-2021",
    PPM: 275,
  },
];

function Chart() {
  return (
    <>
      <h3>December</h3>
      <ResponsiveContainer width="90%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal="true" vertical="" stroke="black" />
        <XAxis dataKey="date" tick={{fill:"black"}}/>
        <YAxis tick={{fill:"black"}} />
        <Tooltip contentStyle={{ backgroundColor: "#B9D6FF", color: "black" }} itemStyle={{ color: "black" }} cursor={false}/>
        <Line type="monotone" dataKey="PPM" stroke="#FFECB7" strokeWidth="3" dot={{fill:"#01070d",stroke:"#7dbcf2",strokeWidth: 2,r:5}} activeDot={{fill:"#01070d",stroke:"#7dbcf2",strokeWidth: 5,r:10}} />
        
      </LineChart>
    </ResponsiveContainer>
  </>
  );
}

export default Chart;

