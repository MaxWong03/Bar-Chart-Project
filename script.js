// You should have a simple API to draw a bar chart. The function should be used by your HTML page to render the chart into your demo page. The signature of the function should be as follows:

// drawBarChart(data, options, element);
// The data parameter will be the data the chart should work from Start with just an Array of numbers
// e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element that the chart will get rendered into.



const domObjects = {
  barChart: '.chart',
  bar: '[class*="bar"]',
  data: 'data',
  barColor1: '[class*=bar]:nth-child(odd)'
};


$(document).ready(function (){

  const addBarTag = (data) => {
    data.forEach((d,index) => {
      const barClass = `bar${index}`;
      $(domObjects.barChart).append(`<div class="${barClass}"></div>`);
      // $(`.${barClass}`).data('value', d);
      $(`.${barClass}`).append(`<data>${d}</data>`);

    })
  }

  const setChartGrid = (data) =>{
    const numOfData = data.length;
    $(domObjects.barChart).css('grid-template-columns', `repeat(${numOfData}, 1fr)`);
    $(domObjects.barChart).css('grid-template-rows', `repeat(${1000}, 1fr)`);
  }

  const setBarHeight = (data) => {
    // const chartHeight = data.sort((a,b)=> {
    //   return b - a;
    // })[0];
    data.forEach((d,index)=> {
      const barClass = `.bar${index}`;
      const barStart = 1000 - d + 1;
      $(barClass).css('grid-row-start', barStart);

    
    });
  }

  const setOptions = (options) => {
    let valuesPosition, barColor1, barColor2, labelColor, barSpacing, barChartAxes, barTitle, titleFontSize, titleFontColor;
    [valuesPosition, barColor1, barColor2, labelColor, barSpacing, barChartAxes, barTitle, titleFontSize, titleFontColor] = 
    [
      options.valuesPosition,
      options.barColor1,
      options.barColor2,
      options.labelColor,
      options.barSpacing,
      options.barChartAxes,
      options.barTitle,
      options.titleFontSize,
      options.titleFontColor
    ];
    $(domObjects.data).css('align-self', valuesPosition);
    $(domObjects.bar).css('background-color', barColor2);
    $(domObjects.barColor1).css('background-color', barColor1);
  }

  const drawBarChart = (data, options = {
    valuesPosition: 'center',
    barColor1: 'rgba(207, 4, 4, 0.589)',
    barColor2: 'rgba(11, 11, 189, 0.603)',
    labelColor: '',
    barSpacing: '5px',
    barChartAxes: '',
    barTitle: 'New Bar Chart',
    titleFontSize: '',
    titleFontColor: 'black'
  }, element) => {
    addBarTag(data);
    setChartGrid(data);
    setBarHeight(data);
    setOptions(options);
  };


  drawBarChart([100,600,400,1000,50,325],{
    valuesPosition: 'start',
    barColor1: 'brown',
    barColor2: 'yellow'
  });
  
})




