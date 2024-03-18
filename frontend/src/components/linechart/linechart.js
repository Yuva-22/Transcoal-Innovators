import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'line',
        data: data,
        options: options,
      });
      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
