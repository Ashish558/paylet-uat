import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Graph(props) {

   const [series, setSeries] = useState([
      {
         name: "Online Collection",
         data: [1000, 2000, 2500, 1500, 3000, 5000, 4000, 4500, 3000]
      },
      {
         name: "UPI Collection",
         data: [2000, 1000, 1500, 1000, 500, 600, 800, 5000, 1000]
      },
   ])

   const [options, setOptions] = useState({
      chart: {
         height: 350,
         type: 'line',
         fontFamily: 'Poppins, Arial, sans-serif',
         zoom: {
            enabled: false
         }
      },
      dataLabels: {
         enabled: false,
         style:{
            fontFamily: 'Poppins, Arial, sans-serif',
         }
      },
      stroke: {
         curve: 'smooth'
      },
      // title: {
      //    text: 'Product Trends by Month',
      //    align: 'left'
      // },
      grid: {
         row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
         },
      },
      legend:{
         show: false
      },
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
   })

   return (
      <div>
         <ReactApexChart options={options}
            series={series}
            type='line' />
      </div>
   )
}
