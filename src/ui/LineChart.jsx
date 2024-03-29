import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#FFFFFF",
        },
        xaxis: {
          categories: props.categories,
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val;
            },
          },
        },
        markers: {
          size: 6,
          colors: ["#5E17EB"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
        colors: ["#f97316", "#22c55e"],
      },
      series: [
        {
          name: "Total Revenues",
          data: props.secondData,
        },
        {
          name: "Total Incomes",
          data: props.data,
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;
