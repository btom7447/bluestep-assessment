// Modal Toggle & Dialog

const modal = document.getElementById("status-modal");
const modalTitle = document.getElementById("status-title");
const modalMessage = document.getElementById("status-message");
const modalIcon = document.getElementById("status-icon");
const closeModalBtn = document.getElementById("close-modal");
const modalActionBtn = document.getElementById("modal-action");

// Open Modal
export const openModal = ({
    title,
    message,
    iconClass = "fa-circle-info",
    iconColor = "text-indigo-600",
}) => {
    modalTitle.textContent = title;
    // Support array of messages to show all errors
    if (Array.isArray(message)) {
        modalMessage.innerHTML = message.map((msg) => `<li>${msg}</li>`).join("");
        modalMessage.classList.add("list-disc", "pl-5");
    } else {
        modalMessage.textContent = message;
        modalMessage.classList.remove("list-disc", "pl-5");
    }

    modalIcon.className = `text-xl ${iconColor} fa-solid ${iconClass}`;
    modal.classList.remove("hidden");
    modal.classList.add("flex", "opacity-0");
    setTimeout(() => {
        modal.classList.add("opacity-100", "transition-opacity", "duration-300");
    }, 10);
};

// Close Modal
export const closeModal = () => {
    // Fade-out effect
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0", "transition-opacity", "duration-300");
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
};

// Event listeners
closeModalBtn.addEventListener("click", closeModal);
modalActionBtn.addEventListener("click", closeModal);

// Click overlay to close
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Escape key closes modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});