import React, { useEffect, useRef } from 'react';
import { plot, line, barX, binX, rectY } from '@observablehq/plot';
import { Box, Stack, Typography } from '@mui/material';

// Random normal function
function randomNormal(size: number, mean: number = 0, stdDev: number = 1): number[] {
  const result: number[] = [];
  for (let i = 0; i < size; i++) {
    let u1 = 0, u2 = 0;
    do {
      u1 = Math.random();
      u2 = Math.random();
    } while (u1 === 0);
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    result.push(z0 * stdDev + mean);
  }
  return result;
}

// Function to generate randomized line plot data with 10x more data points
function randomizeLineData(size: number): { x: number[], y: number[] } {
  const xValues: number[] = [];
  const yValues: number[] = [];
  for (let i = 0; i < size; i++) {
    xValues.push(i);
    yValues.push(Math.random() * 10); // Random y values between 0 and 10
  }
  return { x: xValues, y: yValues };
}

const SimpleCharts: React.FC = () => {
  const chartContainer1 = useRef<HTMLDivElement>(null);
  const chartContainer2 = useRef<HTMLDivElement>(null);
  const chartContainer3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainer1.current && chartContainer2.current && chartContainer3.current) {
      // Chart 1: Line Chart
      const { x: lineX, y: lineY } = randomizeLineData(50); // Generate 10x more data points
      const lineChart = plot({
        marks: [
          line(lineY, { x: lineX, y: lineY, stroke: 'red' })
        ]
      });
      chartContainer1.current.appendChild(lineChart);
      
      // Chart 2: Bar Chart
      const barChart = plot({
        marks: [
          barX([1, 2, 3, 4, 5], { x: [1, 2, 3, 4, 5], y: [1, 4, 9, 16, 25], fill: 'blue' })
        ]
      });
      chartContainer2.current.appendChild(barChart);

      // Chart 3: Custom Plot - Random Normal Distribution
      const data = randomNormal(10000);
      const customChart = plot({
        marks: [
          rectY({length: 10000}, binX({y: "count"}, {x: data}))
        ]
      });
      chartContainer3.current.appendChild(customChart);
    }
  }, []);

  return (
    <Box>
    <Typography variant="body1" sx={{textAlign: 'center'}}>Some example of dashboard area</Typography>
    <Stack  direction="column" sx={{justifyContent: 'center'}}>
      <Typography variant="h6" sx={{textAlign: 'center', pt: 3}}>Random data</Typography>
      <div ref={chartContainer1}></div>
      <Typography variant="h6" sx={{textAlign: 'center',  pt: 3}}>More Random Data</Typography>
      <div ref={chartContainer2}></div>
      <Typography variant="h6" sx={{textAlign: 'center',  pt: 3}}>More Random Data</Typography>
      <div ref={chartContainer3}></div>
    </Stack>
    </Box>
  );
};

export default SimpleCharts;
