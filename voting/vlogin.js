// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        var voter = form.querySelector("input[name='voter']").value.trim();
        const password = form.querySelector("input[name='password']").value.trim();
        voter = voter.toUpperCase();
        // USN pattern: 1CD23CS041
        const usnPattern = /^[0-9][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/;

        // Validate voter ID
        if (!usnPattern.test(voter)) {
            alert("Please enter a valid Voter ID (e.g., 1CD23CS041).");
            event.preventDefault();
            return false;
        }

        // Validate password (non-empty)
        if (password === "") {
            alert("Please enter your password.");
            event.preventDefault();
            return false;
        }
        if( password.length<8){
            alert("password length should atleast be 8 characters!!");
            event.preventDefault();
            return false;
        }

        // If both checks pass, form will submit
    });
});
