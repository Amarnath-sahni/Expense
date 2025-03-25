function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
// Store loan data
let loanData = JSON.parse(localStorage.getItem('loanData')) || [];

// Function to add a loan entry
function addLoanEntry() {
    const loanName = document.getElementById('loanName').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const dueDate = document.getElementById('dueDate').value;

    if (!loanName || isNaN(amount) || !dueDate) {
        alert('Please fill in all fields.');
        return;
    }

    const loan = {
        name: loanName,
        amount: amount,
        dueDate: new Date(dueDate),
        paid: false
    };

    loanData.push(loan);
    localStorage.setItem('loanData', JSON.stringify(loanData));
    displayLoans();
    updateReminder();
    renderChart();
}

// Function to display loans
function displayLoans() {
    const loanList = document.getElementById('loanList');
    loanList.innerHTML = '';

    loanData.forEach((loan, index) => {
        const loanItem = document.createElement('li');
        loanItem.innerHTML = `
            <p>${loan.name} - $${loan.amount} (Due: ${loan.dueDate.toLocaleDateString()})</p>
            <button onclick="markPaid(${index})">Mark as Paid</button>
        `;
        loanList.appendChild(loanItem);
    });
}

// Function to mark loan as paid
function markPaid(index) {
    loanData[index].paid = true;
    localStorage.setItem('loanData', JSON.stringify(loanData));
    displayLoans();
    updateReminder();
    renderChart();
}

// Function to update reminders for upcoming repayments
function updateReminder() {
    const today = new Date();
    const upcomingLoans = loanData.filter(loan => !loan.paid && loan.dueDate > today);
    const reminderMessage = document.getElementById('reminderMessage');
    
    if (upcomingLoans.length > 0) {
        reminderMessage.textContent = `You have ${upcomingLoans.length} loan(s) upcoming.`;
    } else {
        reminderMessage.textContent = 'No upcoming repayments.';
    }
}

// Function to render the interactive chart
function renderChart() {
    const ctx = document.getElementById('loanChart').getContext('2d');
    const paidLoans = loanData.filter(loan => loan.paid);
    const unpaidLoans = loanData.filter(loan => !loan.paid);

    const paidAmount = paidLoans.reduce((acc, loan) => acc + loan.amount, 0);
    const unpaidAmount = unpaidLoans.reduce((acc, loan) => acc + loan.amount, 0);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Paid Loans', 'Unpaid Loans'],
            datasets: [{
                data: [paidAmount, unpaidAmount],
                backgroundColor: ['#28a745', '#dc3545']
            }]
        }
    });
}

// Call these functions on page load
window.onload = function() {
    displayLoans();
    updateReminder();
    renderChart();
};
