document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Show the thank you modal
    let modal = document.getElementById('feedback-modal');
    modal.classList.add('show');
  
    // Optionally, clear the form fields if you want to
    document.getElementById('feedback-form').reset();
  
    // Set a timeout to redirect after a few seconds
    setTimeout(function() {
        modal.classList.remove('show');
        window.history.back(); // Go back to the previous page
    }, 3000); // Adjust the time as needed
});
  
// Close the feedback page when the close button on the form is clicked
document.getElementById('close-feedback-btn').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});
  
// Close the modal when the close button in the modal is clicked
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('feedback-modal').classList.remove('show');
});