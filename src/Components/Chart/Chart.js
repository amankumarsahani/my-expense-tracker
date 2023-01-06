import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function ChartGraph(props) {
  return (
    <div className="chart-container container" style={{height:"50vh",width:"100vh"}}>
      <Line
        data={{
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        id: 1,
        label: '',
        data: props.data,
      }
    ],
  }}
        options={{
          plugins: {
            title: {
              display: true,
            //   text: ""
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}

export default ChartGraph
