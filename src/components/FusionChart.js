import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  { label: "Venezuela", value: "290" },
  { label: "Saudi", value: "260" },
  { label: "Canada", value: "180" },
  { label: "Iran", value: "140" },
  { label: "Russia", value: "115" },
  { label: "UAE", value: "100" },
  { label: "US", value: "30" },
  { label: "China", value: "30" },
];

const chartConfigs = {
  type: "scrollColumn2d",
  width: "700",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",

      numVisiblePlot: "7",
      scrollheight: "10",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      scrollColor: "#cccccc",
      showHoverEffect: "1"
    },
    data: chartData,
  },
};

const FusionChart = () => {
  return <ReactFC {...chartConfigs} />;
};

export default FusionChart;
