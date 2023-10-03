// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

const apiUrl = "https://api.funtranslations.com/translate/";

// Fazer uma solicitação GET para obter dados de temperatura
fetch(`${apiUrl}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Dados de temperatura:", data);
    // Faça algo com os dados recebidos, como exibir no seu aplicativo
  })
  .catch((error) => {
    console.error("Erro ao buscar dados de temperatura:", error);
  });

// Manter emloop a cada 5 segundos
setInterval(() => {
  fetch(`${apiUrl}/temperature`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Dados de temperatura:", data);
      // Faça algo com os dados recebidos, como exibir no seu aplicativo
    });
});

function getDataToTemperatureChart() {
  var data = [];
  $.ajax({
    url: "/api/temperature",
    type: "GET",
    async: false,
    success: function (response) {
      data = response;
    },
  });
  return data;
}

// Bar Chart Example
var ctx = document.getElementById("moisture-chart");
var myLineChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [4215, 5312, 6251, 7841, 9821, 14984],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "month",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 6,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5,
          },
          gridLines: {
            display: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
