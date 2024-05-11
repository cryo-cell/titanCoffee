
let ctx = document.getElementById('ctx');
const reset = document.getElementById("reset")
const title = document.getElementById("title")

if(JSON.parse(localStorage.getItem("profile")) !== "Admin"){
    title.innerHTML = JSON.parse(localStorage.getItem("profile"))
}
else {title.innerHTML = "Admin"}

const chart = new Chart(ctx, {
  type: 'bar',

  data: {
    
    labels: ['Jan-Mar', "April-Jun", "Jul-Sep", "Oct-Dec"],
    datasets: [{
        label: ["TCR Sales 2023"], 
        data: [2005.00, 1471.31, 892.86, 531.60],
      borderWidth: 1,
      backgroundColor: [
        'darkgoldenrod',
        'navy',
        'limegreen',
        'pink'
      ]
    }]
    
  },
  options: {
    scales: {
      y: [{
        beginAtZero: true,
        ticks: {

        stepSize: 1
        }
      }]
    }
  }
});

 function resetChart(){
    chart.data.datasets[0].data= 0;
    chart.update()
console.log(chart.data.datasets[0].data[0]);
}

