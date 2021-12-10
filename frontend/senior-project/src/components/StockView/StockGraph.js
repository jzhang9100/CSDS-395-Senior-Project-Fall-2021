import React from 'react';
import "./StockGraph.css";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
export function StockGraph(props) {
    let state = {
        dataLine: {
          labels: ["Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021", "June 2021", "July 2021", "Aug 2021", "Sept 2021", "Oct 2021"],
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
              pointBorderWidth: 7,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#2B7A78",
              pointHoverBorderColor: "#2B7A78",
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 5,
              data: [65, 59, 80, 81, 56, 55, 40, 40, 40, 50]
            },
          ]
        }
      };
     return(
        <div className="Graph-Area">
            <MDBContainer>
                <h3 className="Graph-Title">Line chart</h3>
                <Line data={state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        </div>
     );
}
export default StockGraph;