import "https://cdn.jsdelivr.net/npm/chart.js"

const ctx = document.getElementById('myChart');

            
let yearArr = [];
let avgtempArr = [];




async function getData() {
    const response = await           
    fetch("dataset.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              
              const temp = row[1];
              console.log(year, temp);

              yearArr.push(year);
              avgtempArr.push(parseFloat(temp ) + 14);
            });
          }

getData();


          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: yearArr,
              datasets: [{
                label: 'Global Average Temperature',
                data: avgtempArr ,
                borderWidth: 1,
                borderColor: '#93c47d',
                backgroundColor: '#93c47d',
              }
            ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
          
