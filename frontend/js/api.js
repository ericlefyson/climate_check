// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

const apiUrl = "http://localhost:3000";
var temperatureData = {
  hours: [],
  temperature_C: [],
};

// Manter emloop a cada 5 segundos
setInterval(() => {
  fetch(`${apiUrl}/temperature`)
    .then((response) => response.json())
    .then((data) => {
      if (Object.keys(data).length === 0) {
        document.getElementById("temperature-actual-value").innerHTML = "N/A";
        return;
      } else {
        document.getElementById("temperature-actual-value").innerHTML =
          data.temperature_C + "°C";
        temperatureData.hours.push(data.time);
        temperatureData.temperature_C.push(data.temperature_C);
        // Area Chart Example
        var ctx = document.getElementById("temperature-chart");
        var myLineChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: temperatureData.hours,
            datasets: [
              {
                label: "Sessions",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: temperatureData.temperature_C,
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  time: {
                    unit: "date",
                  },
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    maxTicksLimit: 7,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 40000,
                    maxTicksLimit: 5,
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          },
        });
      }
      // Faça algo com os dados recebidos, como exibir no seu aplicativo
    });
});

