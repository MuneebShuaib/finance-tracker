import { Pie } from 'react-chartjs-2'
import React from "react"
import { useState } from 'react';
import {Chart as ChartJS} from 'chart.js/auto'


function TransactionGraphs({transactions}){
    const [chartData, setChartData] = useState({
      labels: transactions?.map((data)=> data.category),
      datasets: [{
        label: "Categories",
        data: transactions?.map((data)=> data.expenditure),

      }]

  });

    return(
      <div className = 'pie-charts'>
          <Pie 
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Transactions"
              }
            },
            animation: {
              duration: 0 // general animation time
          },
          }}

          />
      </div>
    )
}
export default TransactionGraphs