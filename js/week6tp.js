function getRandomData(numPoints, scale = 100) {
    return Array.from({ length: numPoints }, () => Math.floor(Math.random() * scale));
}

window.onload = function() {
    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Random Sales',
                data: getRandomData(5, 200), // Random data, scale up to 200
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    // Bar Chart with Random Data
    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
            datasets: [{
                label: 'Random Votes',
                data: getRandomData(5),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart with Random Data
    new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                label: 'Color Distribution',
                data: getRandomData(3, 300), // Random data, scale up to 300
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });

    // Radar Chart with Random Data
    new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
                label: 'Activities',
                data: getRandomData(7, 50), // Random data, scale up to 50
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            responsive: true,
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });
};
