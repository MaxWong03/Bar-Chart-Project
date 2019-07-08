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

$(document).ready(function (){

  const addBarTag = (data,index) => {
    data.forEach((d) => {
      let element = document.createElement(`bar${index}`);
      $('body').append(element);
      $(element).data('value', data);  
    })
  }

})



