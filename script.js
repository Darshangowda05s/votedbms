document.addEventListener("DOMContentLoaded", () => {
    // --- Modal Handling ---
    const signInBtn = document.getElementById("sign-in-btn");
    const loginModal = document.getElementById("login-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");

    if (signInBtn && loginModal && closeModalBtn) {
        signInBtn.addEventListener("click", () => {
            loginModal.classList.add("active");
        });

        closeModalBtn.addEventListener("click", () => {
            loginModal.classList.remove("active");
        });

        // Close modal if user clicks on the overlay
        loginModal.addEventListener("click", (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove("active");
            }
        });
    }

    // --- Modal Tab Switching ---
    const modalTabs = document.querySelectorAll(".modal-tab");
    const formContents = document.querySelectorAll(".form-content");

    modalTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Deactivate all tabs and content
            modalTabs.forEach(t => t.classList.remove("active"));
            formContents.forEach(c => c.classList.remove("active"));

            // Activate clicked tab
            tab.classList.add("active");
            // Activate corresponding content
            const contentId = tab.dataset.tab === 'voter' ? 'voter-login' : 'admin-login';
            document.getElementById(contentId).classList.add("active");
        });
    });

    // --- Main View (Role) Switching ---
    const roleBtns = document.querySelectorAll(".role-btn");
    const mainViews = document.querySelectorAll(".view");

    roleBtns.forEach(button => {
        button.addEventListener("click", () => {
            // Deactivate all buttons and views
            roleBtns.forEach(btn => btn.classList.remove("active"));
            mainViews.forEach(view => view.classList.remove("active"));

            // Activate clicked button
            button.classList.add("active");
            // Activate corresponding view
            const viewId = button.dataset.view;
            document.getElementById(viewId).classList.add("active");
        });
    });
});