document.addEventListener("DOMContentLoaded", async () => {
    // Fetch user details from PHP
    try {
        const response = await fetch("home.php");
        const data = await response.json();

        if (!data.error) {
            document.getElementById("username").innerText = data.name;
        }
    } catch (err) {
        console.log("Error loading user data:", err);
    }

    // Reset buttons clear selection
    document.querySelectorAll(".reset").forEach(btn => {
        btn.addEventListener("click", () => {
            const section = btn.closest(".position");
            const radios = section.querySelectorAll("input[type=radio]");
            radios.forEach(r => r.checked = false);
        });
    });

    // Platform buttons open modal
    const modal = document.getElementById("platform-modal");
    const closeModal = document.getElementById("close-modal");
    const platformTitle = document.getElementById("platform-title");
    const platformDesc = document.getElementById("platform-desc");

    document.querySelectorAll(".platform").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.nextElementSibling.alt;
            platformTitle.innerText = name;
            platformDesc.innerText = `${name}'s platform details will go here.`;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    // Logout button
    document.getElementById("logout-btn").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "logout.php";
    });
});
