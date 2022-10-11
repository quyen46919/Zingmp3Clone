document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myChart').getContext('2d');

  const labels = [
    '01:00',
    '03:00',
    '05:00',
    '07:00',
    '09:00',
    '11:00',
    '13:00',
    '15:00',
    '17:00',
    '19:00',
    '21:00',
    '23:00',
  ];

  const lineColorList = [['#4a90e2'], ['#50e3c2'], ['#e35050']];
  const lineColorHoverList = [
    ['rgba(74, 144, 226, 0.1)'],
    ['rgba(80, 227, 194, 0.1)'],
    ['rgba(227, 80, 80, 0.1)'],
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [
          34, 34, 154, 32, 54, 34, 43, 41, 46, 43, 32, 147, 12, 54, 34, 43, 41,
          146, 12, 54, 34, 43, 47, 42,
        ],
        borderColor: lineColorList[0],
      },
      {
        data: [
          45, 42, 55, 78, 54, 134, 43, 41, 34, 34, 54, 52, 54, 34, 43, 41, 146,
          43, 32, 146, 32, 54, 34, 143,
        ],
        borderColor: lineColorList[1],
      },
      {
        data: [
          134, 43, 41, 134, 34, 154, 42, 45, 142, 55, 78, 154, 34, 43, 41, 34,
          143, 41, 55, 78, 54, 34, 143, 41,
        ],
        borderColor: lineColorList[2],
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'left',
          labels: {
            fontColor: 'white',
            boxWidth: 20,
            padding: 20,
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: false,
          },
          grid: {
            color: 'transparent',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
          },
          grid: {
            drawTicks: false,
            drawBorder: true,
            borderWidth: 0,
            borderDash: [5, 5],
            borderDashOffset: 2,
            color: '#465375',
            lineWidth: 1,
          },
          ticks: {
            stepStze: 10,
            callback: () => '',
          },
        },
      },
    },
  };

  const myChart = new Chart(ctx, config);

  $('.homepage__chart--card').each((i, element) => {
    $(element).hover(
      function () {
        $(this).focus();
        myChart.data.datasets.forEach((line, index) => {
          if (index !== i) {
            myChart.data.datasets[index].borderColor =
              lineColorHoverList[index];
          }
        });
        myChart.update();
      },
      function () {
        myChart.data.datasets.forEach((line, index) => {
          myChart.data.datasets[index].borderColor = lineColorList[index];
        });
        myChart.update();
      }
    );
  });
});
