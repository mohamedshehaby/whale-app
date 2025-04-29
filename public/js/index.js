function createAreaChart(elementId, chartOptions) {
  if (document.getElementById(elementId) && typeof ApexCharts !== "undefined") {
    const chart = new ApexCharts(
      document.getElementById(elementId),
      chartOptions,
    );
    chart.render();
  }
}

const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: {
    enabled: true,
    x: { show: false },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      top: 10,
      bottom: 20,
      left: 10,
      right: 10,
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456, 6620],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    show: true,
    offsetY: 10,
    categories: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: true,
    offsetX: 8,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      formatter: function (value) {
        return "$" + value;
      },
    },
  },
  legend: { show: false },
};

createAreaChart("revenue-chart", options);
