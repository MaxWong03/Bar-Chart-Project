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
  barColor1: '[class*=bar]:nth-child(odd)',
  axis: '.axis',
  xAxis: '.xaxis',
  yAxis: '.yaxis'
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
    $(domObjects.barChart).css({
      'grid-column': `1/${numOfData+1}`
    });
    $(domObjects.barChart).css('grid-template-rows', `repeat(${1000}, 1fr)`);
    $(domObjects.axis).css('grid-template-columns', `5px repeat(${numOfData}, 1fr)`);
    $(domObjects.xAxis).css('grid-column', `1/${numOfData+1}`);

    return numOfData;
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

  const setOptions = (options, numOfData) => {
    let valuesPosition, barColor1, barColor2, labelColor, barSpacing, barTitle, titleFontSize, titleFontColor, axisColor, axisSize;
    [valuesPosition, barColor1, barColor2, labelColor, barSpacing, barTitle, titleFontSize, titleFontColor, axisColor, axisSize] = 
    [
      options.valuesPosition,
      options.barColor1,
      options.barColor2,
      options.labelColor,
      options.barSpacing,
      options.barTitle,
      options.titleFontSize,
      options.titleFontColor,
      options.axisColor,
      options.axisSize
    ];
    $(domObjects.data).css('align-self', valuesPosition);
    $(domObjects.bar).css('background-color', barColor2);
    $(domObjects.barColor1).css('background-color', barColor1);
    $(domObjects.barChart).css('grid-column-gap', barSpacing);
    $(domObjects.axis).css({
      'grid-template-rows': `repeat(12, 1fr) ${axisSize} 1fr`,
      'grid-template-columns': `${axisSize} repeat(${numOfData}, 1fr)`
      });
    $(`${domObjects.xAxis}, ${domObjects.yAxis}`).css('background-color', axisColor);
    
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
    titleFontColor: 'black',
    axisSize: '5px',
    axisColor: 'rgba(128, 128, 128, 0.726)'
  }, element) => {
    addBarTag(data);
    const numOfData = setChartGrid(data);
    setBarHeight(data);
    setOptions(options,numOfData);
  };


  drawBarChart([100,600,400,1000,50,325,99, 73, 288, 999, 193,134, 876, 589, 397],{
    valuesPosition: 'start',
    // barColor1: 'brown',
    // barColor2: 'yellow',
    barSpacing: '20px',
    // axisSize: '10px',
    // axisColor: 'red'
  });
  
})




