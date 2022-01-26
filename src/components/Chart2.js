import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: '01-01-2022',
    PPM: 269,
  },
  {
    date: "01-02-2022",
    PPM: 270,
  },
  {
    date: "01-03-2022",
    PPM: 315,
  },
  {
    date: "12-04-2022",
    PPM: 318,
  },
  {
    date: "01-05-2022",
    PPM: 289,
  },
  {
    date: '01-06-2022',
    PPM: 310,
  },
  {
    date: "01-07-2022",
    PPM: 316,
  },
  {
    date: "01-08-2022",
    PPM: 255,
  },
  {
    date: "01-09-2022",
    PPM: 260,
  },
  {
    date: "01-10-2022",
    PPM: 270,
  },
  {
    date: '01-11-2022',
    PPM: 266,
  },
  {
    date: "01-12-2022",
    PPM: 271,
  },
  {
    date: "01-13-2022",
    PPM: 262,
  },
  {
    date: "01-14-2022",
    PPM: 242,
  },
  {
    date: "01-15-2022",
    PPM: 296,
  },
  {
    date: "01-16-2022",
    PPM: 324,
  },
  {
    date: "01-17-2022",
    PPM: 300,
  },
  {
    date: "01-18-2022",
    PPM: 280,
  },
  {
    date: "01-19-2022",
    PPM: 290,
  },
  {
    date: "01-20-2022",
    PPM: 305,
  },
  {
    date: '01-21-2022',
    PPM: 310,
  },
  {
    date: "01-22-2022",
    PPM: 306,
  },
  {
    date: "01-23-2022",
    PPM: 296,
  },
  {
    date: "01-24-2022",
    PPM: 290,
  },
  {
    date: "01-25-2022",
    PPM: 284,
  },
  {
    date: "01-26-2022",
    PPM: 270,
  },
];

function Chart2() {
  return (
    <>
      <h3>January</h3>
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
        <CartesianGrid  horizontal="true" vertical="" stroke="black"/>
        <XAxis dataKey="date" tick={{fill:"black"}}/>
        <YAxis tick={{fill:"black"}} />
        <Tooltip contentStyle={{ backgroundColor: "#B9D6FF", color: "black" }} itemStyle={{ color: "black" }} cursor={false}/>
        <Line type="monotone" dataKey="PPM" stroke="black" strokeWidth="3" dot={{fill:"#08167E",stroke:"#7dbcf2",strokeWidth: 2,r:5}} activeDot={{fill:"#08167E",stroke:"#7dbcf2",strokeWidth:5 ,r:10}} />
        
      </LineChart>
    </ResponsiveContainer>
  </>
  );
}

export default Chart2;

