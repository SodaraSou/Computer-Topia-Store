import React, { Component } from "react";
import Chart from "react-apexcharts";

class SingleLineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#FFFFFF",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: props.categories,
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return Math.round(val);
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
        colors: ["#3b82f6"],
      },
      series: [
        {
          name: "Total Orders",
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

export default SingleLineChart;
