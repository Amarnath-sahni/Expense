// Function to generate the chart
function generateChart() {
    const ctx = document.getElementById('loanChart').getContext('2d');
    
    const chartData = {
        labels: ['Loan 1', 'Loan 2', 'Loan 3', 'Loan 4', 'Loan 5'],
        datasets: [{
            label: 'Outstanding Loan Amounts ($)',
            data: [500, 1000, 300, 700, 450], // Example loan data (replace with real data)
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const chartOptions = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Create the chart
    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
}
