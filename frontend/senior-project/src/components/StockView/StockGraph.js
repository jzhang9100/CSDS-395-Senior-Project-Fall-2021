import React from 'react';
import "./StockGraph.css";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
export function StockGraph({historicalData}) {
    console.log('historical data', historicalData)
    let x = []
    let y = []
    for (let item in historicalData['Monthly Time Series']){
      console.log(item)
      x.push(item)
      y.push(historicalData['Monthly Time Series'][item]['1. open'])
    }
    x = x.reverse();
    y = y.reverse();
    let state = {
        dataLine: {
          labels:  x,
          datasets: [
            {
              label: "Stock Price",
              fill: true,
              lineTension: 0,
              backgroundColor: "#3aafa93d",
              borderColor: "#3AAFA9",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "2B7A78",
              pointBackgroundColor: "#2B7A78",
              pointBorderWidth: 0,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#2B7A78",
              pointHoverBorderColor: "#2B7A78",
              pointHoverBorderWidth: 1,
              pointRadius: 0,
              pointHitRadius: 1,
              data: y
            },
          ]
        }
      };
     return(
        <div className="Graph-Area">
            <MDBContainer>
                <h3 className="Graph-Title">Historical Data</h3>
                <Line data={state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        </div>
     );
}
export default StockGraph;