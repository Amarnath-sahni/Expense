// Function to add loan entry
function addLoanEntry() {
    // Get the input values
    const loanAmount = document.getElementById('loan-amount').value;
    const loanDate = document.getElementById('loan-date').value;
    const repaymentDate = document.getElementById('repayment-date').value;

    // Check if the inputs are not empty
    if (loanAmount && loanDate && repaymentDate) {
        // Create a new list item to display the loan entry
        const loanList = document.getElementById('loan-list');
        const newLoan = document.createElement('li');
        newLoan.innerHTML = `
            <strong>Loan Amount:</strong> $${loanAmount} <br>
            <strong>Loan Date:</strong> ${loanDate} <br>
            <strong>Repayment Date:</strong> ${repaymentDate}
        `;
        
        // Append the new loan entry to the list
        loanList.appendChild(newLoan);

        // Clear the form fields
        document.getElementById('loan-entry-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
}
