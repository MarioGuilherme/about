google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['MySQL', 3],
        ['PhotoShop', 2],
        ['HTML + CSS', 1],
        ['JavaScript', 5],
        ['Edição de Vídeo', 4]
    ]);

    var options = {
        title: 'HABILIDADES',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}