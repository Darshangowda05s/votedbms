document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        let stdusn = form.stdusn.value.trim().toUpperCase();
        const name = form.name.value.trim();
        const department = form.department.value.trim();
        const semester = parseInt(form.semester.value.trim());
        const phone = form.phone.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        // Convert voter input to uppercase
        form.stdusn.value = stdusn;

        // USN format: 1CD23CS041
        const usnPattern = /^[0-9][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/;
        if (!usnPattern.test(stdusn)) {
            alert("Invalid USN format. Example: 1CD23CS041");
            e.preventDefault();
            return;
        }

        if (name.length < 3) {
            alert("Please enter a valid name (min 3 characters).");
            e.preventDefault();
            return;
        }

        if (semester < 1 || semester > 8 || isNaN(semester)) {
            alert("Semester must be between 1 and 8.");
            e.preventDefault();
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be 10 digits.");
            e.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            e.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault();
            return;
        }
    });
});
