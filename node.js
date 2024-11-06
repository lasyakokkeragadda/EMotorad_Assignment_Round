// Initialize Activity Chart
const ctx1 = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Sales',
            data: [300, 500, 700, 400],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            fill: true
        }, {
            label: 'Revenue',
            data: [200, 400, 600, 300],
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
        }
    }
});

// Initialize Top Products Chart
const ctx2 = document.getElementById('topProductsChart').getContext('2d');
const topProductsChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
            label: 'Top Products',
            data: [55, 25, 20],
            backgroundColor: ['#4f46e5', '#22c55e', '#f43f5e'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});