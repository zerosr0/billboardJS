import './script.js';

var chart = bb.generate({
  data: {
    x: "x",
    columns: [
      ["x", "23-10-01", "23-11-01", "23-12-01", "24-01-01", "24-02-01", "24-03-01"],
      ["오창 불량율", 150, 130, 115, 160, 135, 120],
      ["포항 불량율", 130, 340, 200, 400, 250, 350],
      ["목표", 270, 255, 225, 240, 225, 215],
    ],
    type: "line", // for ESM specify as: line()
    labels: true
  },
  axis: {
    x: {
      padding: {
        left: 30,
        right: 30,
        unit: "px",
      },
      type: "timeseries",
      tick: {
        format: "%Y-%m%"
      },
    }
  },
  size: {
    width: 400,
    height: 200
  },
  // plugins: [
  //   new bb.plugin.textoverlap({ // for ESM specify as: new textoverlap()
  //     selector: ".bb-texts text",
  //     extent: 8,
  //     area: 0
  //   }),
  // ],
  bindto: "#areaRangeChart"
});

chart.internal.state.width;
