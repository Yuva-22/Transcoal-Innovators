// import React, { useEffect, useRef } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsExporting from 'highcharts/modules/exporting';
// // import $ from 'jquery';

// // Initialize Highcharts modules
// HighchartsMore(Highcharts);
// HighchartsExporting(Highcharts);

// const Speed = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef && chartRef.current) {
//       const chartOptions = {
//         chart: {
//           type: 'gauge'
//         },
//         title: {
//           text: 'Speedometer'
//         },
//         pane: {
//           startAngle: -90,
//           endAngle: 90,
//           background:
//           {
//             backgroundColor:'#ddd',
//             outerRadius:'100%',
//             innerRadius:'90%',
//             shape:'arc',
//             borderColor:'transparent',
//           }
//        },
//         yAxis: {
//           min: 0,
//           max: 200,
//           minorTickInterval: 'auto',
//           minorTickWidth: 1,
//           minorTickLength: 10,
//           minorTickPosition: 'inside',
//           minorTickColor: '#666',
//           tickPixelInterval: 30,
//           tickWidth: 2,
//           tickPosition: 'inside',
//           tickLength: 10,
//           tickColor: '#666',
//           labels: {
//             step: 2,
//             rotation: 'auto'
//           },
//           title: {
//             // text: 'km/h'
//           },
//           plotBands: [
//             {
//               from: 0,
//               to: 120,
//               color: '#55BF3B' // green
//             },
//             {
//               from: 120,
//               to: 160,
//               color: '#DDDF0D' // yellow
//             },
//             {
//               from: 160,
//               to: 200,
//               color: '#DF5353' // red
//             },
//             {
//               from: 100,
//               to: 140,
//               color: '#6677ff',
//               innerRadius: '100%',
//               outerRadius: '110%'
//             }
//           ]
//         },
//         series: [
//           {
//             name: 'Speed',
//             data: [40],
//             tooltip: {
//             //   valueSuffix: ' km/h'
//             }
//           }
//         ]
//       };

//       const chart = Highcharts.chart(chartRef.current, chartOptions);

//       // Simulate data update
//       if (!chart.renderer.forExport) {
//         setInterval(() => {
//         if (chart && chart.series && chart.series[0] && chart.series[0].points && chart.series[0].points[0]) {
//           const point = chart.series[0].points[0];
        
//           const inc = Math.round((Math.random() - 0.5) * 20);
//           let newVal = point.y + inc;

//           if (newVal < 0 || newVal >1) {
//             newVal = point.y - inc;
//           }
//           if(newVal>0)
//           {
//             point.update(newVal);
//           }
//           else{
//             point.update(newVal+20);
//           }
//         }
//         else{
//             console.log('Chart or series/points not available yet. Waiting for initialization...');
//         }
//         }, 3000);
//       }
//     }
//   }, []);

//   return <div ref={chartRef} className='speedchart' style={{ minWidth: '310px', maxWidth: '400px', height: '200px', margin:'0 10',backgroundColor:'black',marginRight:'none' }} />;
// };

//  export default Speed;

import './speed.css';

const Speed = () => {
  return(
    <div class='speed'>
      <div class='speed__wheel'>
        <div class='speed__tick'>
          <div class='tick' value='0'></div>
          <div class='tick' value='10'></div>
          <div class='tick' value='20'></div>
          <div class='tick' value='30'></div>
          <div class='tick' value='40'></div>
          <div class='tick' value='50'></div>
          <div class='tick' value='60'></div>
          <div class='tick' value='70'></div>
          <div class='tick' value='80'></div>
          <div class='tick' value='90'></div>
          <div class='tick' value='100'></div>
          <div class='tick' value='110'></div>
          <div class='tick' value='120'></div>
          <div class='tick' value='130'></div>
          <div class='tick' value='140'></div>
          <div class='tick' value='150'></div>
          <div class='tick' value='160'></div>
          <div class='tick' value='170'></div>
          <div class='tick' value='180'></div>
          <div class='tick' value='190'></div>
        </div>
        <div class='pointer'></div>
        <div class='endpoint'></div>
      </div>
    </div>
  )
}

export default Speed;


