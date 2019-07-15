// You should have a simple API to draw a bar chart. The function should be used by your HTML page to render the chart into your demo page. The signature of the function should be as follows:

// drawBarChart(data, options, element);
// The data parameter will be the data the chart should work from Start with just an Array of numbers
// e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element that the chart will get rendered into.

//Object with all the options for the chart
let options = {
  valuesPosition : 'centre',
  barWidth : 0,
  barHeight : 0,
  barColor : 'red',
  labelColor : 'blue',
  barSpacing : 3,
  barChartAxes : 4,
  barTitle : 'New Bar Chart',
  titleFontSize : 12,
  titleFontColor : 'black'
};

const domObjects = {
  barChart: '.chart'
}

$(document).ready(function (){

  const addBarTag = (data) => {
    data.forEach((d,index) => {
      const barClass = `bar${index}`;
      $(domObjects.barChart).append(`<div class="${barClass}"></div>`);
      // $(`.${barClass}`).data('value', d);
      // $(`.${barClass}`).append(`<data>${d}</data>`);

    })
  }

  const setChartGrid = (data) =>{
    const numOfData = data.length;
    $(domObjects.barChart).css('grid-template-columns', `repeat(${numOfData}, 1fr)`);
    $(domObjects.barChart).css('grid-template-rows', `repeat(${1000}, 1fr)`);
  }

  const setBarHeight = (data) => {
    const chartHeight = data.sort((a,b)=> {
      return b - a;
    })[0];
    data.forEach((d,index)=> {
      const barClass = `.bar${index}`;
      const barStart = 1000 - d + 1;
      $(barClass).css('grid-row-start', barStart);

    
    });
  }

  addBarTag([900,600,100,400,50]);
  setChartGrid([900,600,100,400,50]);
  setBarHeight([900,600,100,400,50]);


})




