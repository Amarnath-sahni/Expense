// Function to set reminder
function setupReminders() {
    const reminderDate = document.getElementById('reminder-date').value;
    
    if (reminderDate) {
        // Save reminder date to localStorage
        localStorage.setItem('reminderDate', reminderDate);
        
        // Display confirmation
        alert(`Reminder set for: ${reminderDate}`);
    } else {
        alert('Please select a reminder date');
    }
}

// Optionally, you can retrieve and display the stored reminder date on page load
window.onload = function() {
    const savedReminderDate = localStorage.getItem('reminderDate');
    
    if (savedReminderDate) {
        alert(`Your next reminder is set for: ${savedReminderDate}`);
    }
};
