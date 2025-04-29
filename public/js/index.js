function createAreaChart(elementId, chartOptions) {
  if (document.getElementById(elementId) && typeof ApexCharts !== "undefined") {
    const chart = new ApexCharts(
      document.getElementById(elementId),
      chartOptions,
    );
    chart.render();
  }
}

createAreaChart("revenue-chart", {
  chart: {
    height: "320px",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Roboto, sans-serif",
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
      name: "Revenu",
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
        fontFamily: "Roboto, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: { show: true },
    axisTicks: { show: true },
  },
  yaxis: {
    show: true,
    offsetX: 8,
    labels: {
      show: true,
      style: {
        fontFamily: "Roboto, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      formatter: function (value) {
        return "$" + value;
      },
    },
  },
  legend: { show: false },
});




if(document.getElementById("productivity-chart") && typeof ApexCharts !== 'undefined') {
  console.log("productivity card exists");
  
  const chart = new ApexCharts(document.getElementById("productivity-chart"), {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Producitivity",
        color: "#23BD33",
        data: [
          { x: "One", y: 232 },
          { x: "Two", y: 113 },
          { x: "Three", y: 341 },
          { x: "Four", y: 224 },
          { x: "Five", y: 522 },
          { x: "Six", y: 411 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Roboto, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: false,
      Robotosect: false,
      style: {
        fontFamily: "Roboto, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Roboto, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  });
  chart.render();
}



if (document.getElementById("expenses-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("expenses-chart"), {
    chart: {
      height: "320px",
      maxWidth: "100%",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      },
    },
    series: [
      {
        name: "Sales",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB",
      },
      {
        name: "Expenses",
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: "#7E3AF2",
      },
    ],
    legend: {
      show: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  });
  chart.render();
}