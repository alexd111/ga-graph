function loadGraph() {
  $.getJSON("results.json", function(data) {
    labelData = [];
    averageData = [];
    bestData = [];
    for(var i = 0; i < data.length; i++) {
      labelData.push(i + 1);
      averageData.push(data[i][1]);
      bestData.push(data[i][2]);
    }
    var ctx = document.getElementById("ga-chart").getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight * 0.9;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labelData,
          datasets: [
              {
                label: 'Average fitness',
                data: averageData,
                backgroundColor: [
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              },
              {
                label: 'Best fitness',
                data: bestData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
              }
        ]
      },
      options: {
          responsive: true,
          title: {
            display: true,
            text: 'GA Results'
          }
      }
    });
  });

}
